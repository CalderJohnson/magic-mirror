"""Extract relevant reviews"""
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

from .clients import cohere_client
import config

class ReviewExtractor:
    """Module for extracting relevant reviews using Cohere reranking and embedding similarity"""
    @staticmethod
    def _get_relevant_reviews(reviews: list, query: str) -> list:
        """Extract relevant reviews from a list of reviews using embedding similarity"""

        # Embed reviews
        review_embeddings = cohere_client.embed(
            texts=[review["content"] for review in reviews],
            model=config.EMBEDDING_MODEL,
            input_type="search_document",
        ).embeddings

        # Embed prompt
        query_embedding = cohere_client.embed(
            texts=[query],
            model=config.EMBEDDING_MODEL,
            input_type="search_query",
        ).embeddings

        # Calculate similarity matrix
        similarity_matrix = cosine_similarity(query_embedding, review_embeddings)
        similarity_scores = similarity_matrix.flatten()

        # Get top N reviews
        topn_indices = np.argsort(similarity_scores)[::-1]
        topn_reviews = [reviews[i] for i in topn_indices][:config.N_VALUE]

        return topn_reviews


    @staticmethod
    def _rerank_reviews(relevant_reviews: list, query: str) -> list:
        """Rerank reviews based on relevance"""
        response = cohere_client.rerank(
            query=query,
            documents=[review["content"] for review in relevant_reviews],
            top_n=config.K_VALUE,
            model=config.RERANKER_MODEL,
        )
    
        topk_reviews = [relevant_reviews[result.index] for result in response.results]

        return topk_reviews

    @staticmethod
    def get_topk_reviews(reviews: list, product_title: str) -> list:
        """Get top k reviews for a product"""

        # Augment prompt with review statistics
        review_stats = {
            "5_star": len([review for review in reviews if review["rating"] == 5]),
            "4_star": len([review for review in reviews if review["rating"] == 4]),
            "3_star": len([review for review in reviews if review["rating"] == 3]),
            "2_star": len([review for review in reviews if review["rating"] == 2]),
            "1_star": len([review for review in reviews if review["rating"] == 1]),
            "average_rating": sum([review["rating"] for review in reviews]) / len(reviews),
        }

        augmented_rerank_prompt = config.RERANK_PROMPT % (product_title, *review_stats.values())

        # 2 stage review extraction
        topn_reviews = ReviewExtractor._get_relevant_reviews(reviews, augmented_rerank_prompt)
        topk_reviews = ReviewExtractor._rerank_reviews(topn_reviews, augmented_rerank_prompt)

        return topk_reviews
