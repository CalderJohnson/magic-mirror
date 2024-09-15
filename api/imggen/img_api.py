"""API for the virtual try-on service."""
import os
import uuid
import requests
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse, FileResponse
import cloudinary
from cloudinary.utils import cloudinary_url

from app import ImageGenerator
import config

app = FastAPI()

# CORS middleware
origins = [
    "http://localhost",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Cloudinary configuration
cloudinary.config( 
    cloud_name = config.CLOUDINARY_CLOUD_NAME, 
    api_key = config.CLOUDINARY_API_KEY, 
    api_secret = config.CLOUDINARY_API_SECRET,
    secure=True
)

def upload_image(image_path: str):
    """Upload image to Cloudinary."""
    upload_result = cloudinary.uploader.upload(
        image_path,
        public_id="tryon",
    )
    return response.json()["secure_url"]

def get_garment_data(id: str, store: str):
    """GraphQL query grabs product description and image"""
    print(config.SHOPIFY_API_KEY)
    query = """
    {
        product(id: "gid://shopify/Product/%s") {
            title
            description
            featuredImage {
                url
            }
        }
    }
    """ % id

    response = requests.post(
        config.SHOPIFY_API_URL % store,
        json={'query': query},
        headers=config.REQUEST_HEADERS,
    ).json()

    garment_description = response["data"]["product"]["title"] + " " + response["data"]["product"]["description"]
    garment_image_url = response["data"]["product"]["featuredImage"]["url"]

    return garment_description, garment_image_url

def upload_image(image_path: str):
    """Upload image to Cloudinary."""
    upload_result = cloudinary.uploader.upload(
        image_path,
        public_id="result",
    )
    return upload_result["secure_url"]

class TryonRequest(BaseModel):
    id: str
    store: str
    user_image_url: str

@app.post("/tryon/{id}")
async def get_tryon_image(tryon_request: TryonRequest):
    """Get a virtual try on of a product using an uploaded image."""
    id = tryon_request.id
    store = tryon_request.store
    user_image_url = tryon_request.user
    
    # Get garment and user data
    garment_description, garment_image_url = get_garment_data(id, store)
    garment_image, user_image = requests.get(garment_image_url), requests.get(user_image_url)

    if garment_image.status_code != 200 or user_image.status_code != 200:
        return JSONResponse(status_code=400, content={"message": "Failed to fetch images.", "img_url": None})
    
    # Save the files to temporily to disk
    user_filepath = "./temp/" + str(uuid.uuid4())
    garment_filepath = "./temp/" + str(uuid.uuid4())
    with open(user_filepath, "wb") as user_buffer, open(garment_filepath, "wb") as garment_buffer:
        user_buffer.write(user_image.content)
        garment_buffer.write(garment_image.content)
    
    # Generate try-on image
    result_path = ImageGenerator.generate_tryon(user_filepath, garment_filepath, garment_description)

    # Delete the files after processing
    os.remove(user_filepath)
    os.remove(garment_filepath)

    # Upload result image to Cloudinary
    result_url = upload_image(result_path)

    return JSONResponse(status_code=200, content={"message": "Success", "img_url": result_url})
