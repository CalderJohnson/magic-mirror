"""Module for generating product summary using Cohere R1"""
from .clients import cohere_client
import config

class ProductSummarizer:
    """Module for generating product summary using Cohere R1"""
    @staticmethod
    def generate_summary(product: dict, reviews: list) -> str:
        """Generate summary from the given product data."""
        reviews_text = ",".join([f"{review['rating']} stars {review['content']}" for review in reviews])
        augmented_prompt = config.INFERENCE_PROMPT % (
            product["title"],
            product["description"],
            ",".join(product["tags"]),
            reviews_text
        )
        return cohere_client.chat(
            model=config.LANGUAGE_MODEL,
            preamble=config.SYSTEM_PROMPT,
            message=augmented_prompt,
            temperature=0.35,
        ).text
