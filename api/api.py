"""API endpoints for product analysis."""
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from analyzer.interface import ProductAnalyzer

origins = [
    "http://localhost",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/summary/{id}")
async def get_product_info(id: str, store: str):
    """Get product analysis."""
    return JSONResponse(status_code=200, content={"description": ProductAnalyzer.get_product_information(id, store)})
