"""Cohere client registration."""
import cohere

from .. import config

cohere_client = cohere.Client(
    config.COHERE_API_KEY,
)
