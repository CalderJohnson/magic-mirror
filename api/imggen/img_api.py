"""API for the virtual try-on service."""
import uuid
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse

from .app import ImageGenerator
from .. import config

origins = [
    "http://localhost",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.get("/tryon/{id}")
async def get_tryon_image(id: str, store: str, user_image: UploadFile = File(...)):
    """Get a virtual try on of a product using an uploaded image."""

    # Validate input file
    if not user_image.content_type.startswith('image/'):
        return JSONResponse(status_code=400, content={"message": "Uploaded file is not an image."})
    
    # Get garment data
    garment_description, garment_image_url = get_garment_data(id, store)

    #TODO: Get garment image from URL
    
    # Save the files to temporily to disk
    user_filepath = "./temp/" + str(uuid.uuid4())
    garment_filepath = "./temp/" + str(uuid.uuid4())
    with open(user_filepath, "wb") as user_buffer, open(garment_filepath, "wb") as garment_buffer:
        shutil.copyfileobj(user_image.file, user_buffer)
        shutil.copyfileobj(garment_image.file, garment_buffer)
    
    # Generate try-on image
    result_path = ImageGenerator.generate_tryon(user_filepath, garment_filepath, garment_description)

    # Delete the files after processing
    os.remove(user_filepath)
    os.remove(garment_filepath)

    return FileResponse(result_path, media_type="image/jpg", filename="tryon.jpg")
