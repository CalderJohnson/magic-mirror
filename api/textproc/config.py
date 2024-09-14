"""Hyperparameters, API keys, and locators"""
import os
from dotenv import load_dotenv

load_dotenv()

# Secrets
COHERE_API_KEY = os.getenv("COHERE_API_KEY")

# Locators
SHOPIFY_API = "" # Shopify API URL

# Models
EMBEDDING_MODEL = "embed-english-v3.0"
RERANKER_MODEL  = "rerank-english-v3.0"
LANGUAGE_MODEL  = "command-r-plus-08-2024"

# Prompt for system instructions
SYSTEM_PROMPT = """
    You are a helpful AI assistant. Generate an unbiased summary of the product using the given information. You are not selling the product, just giving information on it.
    Be dynamic and informative, mentioning the good as well as potentially negative aspects of the product. Mention the information included in the provided relevant product reviews.
"""

# Prompt for product information generation
INFERENCE_PROMPT = """
    Provide a summary of the following product.
    The product's name: %s
    The product description: %s
    The products tags: %s
    The top relevant product reviews: %s
"""

# Prompt for review reranking
RERANK_PROMPT = """
    What are the most relevant and informate reviews for this product? %s
    Make sure to reflect the overall sentiment of the product, it had %d 5 star reviews, %d 4 star reviews, %d 3 star reviews, %d 2 star reviews, and %d 1 star reviews.
    The average rating for this product is %.2f.
"""

# Hyperparameters
N_VALUE = 6 # Max of reviews to extract through embedding similarity
K_VALUE = 3  # Number of relevant reviews to extract through reranking
