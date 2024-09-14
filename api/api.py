"""API endpoints for the extension to connect to."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

# API route to get product summary
@app.get("/summary/{id}")
def get_product_info(id: str):
    return ProductAnalyzer.get_product_information(id)

# API route to generate try on image
@app.get("/tryon/{id}")
def get_tryon_image(id: str):
    pass
