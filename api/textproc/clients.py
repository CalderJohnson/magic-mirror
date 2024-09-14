"""Cohere client registration."""
import cohere

from . import cfg

cohere_client = cohere.Client(
    cfg.COHERE_API_KEY,
)
