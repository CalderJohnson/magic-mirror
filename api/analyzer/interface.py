"""Interface with the product analysis pipeline"""
from .loader import ProductLoader
from .topk_reviews import ReviewExtractor
from .inference import ProductSummarizer

class ProductAnalyzer:
    @staticmethod
    def get_product_information(id: str, store: str) -> str:
        """Get product information"""
        product_data = ProductLoader.get_product(id, store)
        product_reviews = ProductLoader.get_reviews(id, store)
        topk_reviews = ReviewExtractor.get_topk_reviews(product_reviews["reviews"], product_data["product"]["title"])
        product_summary = ProductSummarizer.generate_summary(product_data["product"], topk_reviews)
        return product_summary
