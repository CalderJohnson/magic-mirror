"""API endpoints for product analysis."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from analyzer.interface import ProductAnalyzer

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
async def get_product_info(id: str, store: str):
    """Get product analysis."""
    return ProductAnalyzer.get_product_information(id, store)
