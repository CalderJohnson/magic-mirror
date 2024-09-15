"""API endpoints for product analysis."""
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

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

class ProductInfo(BaseModel):
    id: str
    store: str

@app.post("/summary/")
async def get_product_info(product_info: ProductInfo):
    """Get product analysis."""
    return JSONResponse(
        status_code=200,
        content={
            "description": ProductAnalyzer.get_product_information(product_info.id, product_info.store)
        }
    )
