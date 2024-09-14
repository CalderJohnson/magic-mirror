"""API endpoints for the extension to connect to."""
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, FileResponse
import uuid
import shutil

from textproc.interface import ProductAnalyzer

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

@app.get("/summary/{id}")
async def get_product_info(id: str):
    """Get product analysis."""
    return ProductAnalyzer.get_product_information(id)

@app.get("/tryon/{id}")
async def get_tryon_image(user_image: UploadFile = File(...), garment_image: UploadFile = File(...)):
    """Get a virtual try on of a product using an uploaded image."""
    if not file.content_type.startswith('image/'):
        return JSONResponse(status_code=400, content={"message": "Uploaded file is not an image."})
    
    # Save the files to temporily to disk
    user_filepath = "./temp/" + str(uuid.uuid4())
    garment_filepath = "./temp/" + str(uuid.uuid4())
    with open(user_filepath, "wb") as user_buffer, open(garment_filepath, "wb") as garment_buffer:
        shutil.copyfileobj(user_image.file, user_buffer)
        shutil.copyfileobj(garment_image.file, garment_buffer)
    
    # TODO: Implement the try-on logic here

    # Delete the files after processing
    os.remove(user_filepath)
    os.remove(garment_filepath)

    return FileResponse("temp/.jpg", media_type="image/jpg", filename="tryon.jpg")
