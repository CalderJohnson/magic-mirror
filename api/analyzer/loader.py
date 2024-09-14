"""Fetch product data from the shopify API"""
import requests
from .. import config

class ProductLoader:
    @staticmethod
    def get_product(id: str, store: str):
        """GraphQL query grabs product info"""
        query = """
        {
            product(id: "gid://shopify/Product/%s") {
                title
                description
                tags
            }
        }
        """ % id

        response = requests.post(
            config.SHOPIFY_API_URL % store,
            json={'query': query},
            headers=config.REQUEST_HEADERS,
        ).json()

        return response["data"]

    @staticmethod
    def get_reviews(id: str, store: str):
        """REST API call to get reviews"""
        # PLACEHOLDER FOR TESTING
        response = {
            "reviews": [
                {
                    "rating": 5,
                    "content": "This sweater is so soft and comfortable! I love the cheetah print design and the quality is amazing.",
                },
                {
                    "rating": 4,
                    "content": "The sweater is great for layering and the print is very trendy. The only downside is that it runs a bit small.",
                },
                {
                    "rating": 3,
                    "content": "The sweater is cute but the material is a bit itchy. The fit is also a bit off for me.",
                },
                {
                    "rating": 2,
                    "content": "The sweater is not worth the price. The material is cheap and the print is not as vibrant as I expected.",
                },
                {
                    "rating": 1,
                    "content": "I was very disappointed with this sweater. The print was faded and the material was scratchy. I would not recommend this product.",
                },
                {
                    "rating": 5,
                    "content": "Its nice",
                },
                {
                    "rating": 4,
                    "content": "Its good",
                },
                {
                    "rating": 3,
                    "content": "Its okay",
                },
                {
                    "rating": 2,
                    "content": "Its bad",
                },
                {
                    "rating": 1,
                    "content": "Its terrible",
                },
                {
                    "rating": 5,
                    "content": "This sweater is incredibly soft and comfortable. The cheetah print is eye-catching and stylish, and the quality of the fabric is top-notch. It's perfect for layering in the fall, and I've received many compliments on it."
                },
                {
                    "rating": 4,
                    "content": "I really like the cheetah print and the sweater's fit is great. It's warm and cozy, though I wish it was a bit thicker. Overall, a good purchase."
                },
                {
                    "rating": 3,
                    "content": "The sweater looks nice and the print is fun. However, it feels a bit scratchy after wearing it for a while. It’s decent for the price, but not my favorite."
                },
                {
                    "rating": 2,
                    "content": "The sweater didn't meet my expectations. The material feels cheap, and the cheetah print isn't as vibrant as shown in the pictures. Not worth the price for me."
                },
                {
                    "rating": 1,
                    "content": "Not happy with this purchase. The sweater is uncomfortable and the print is off."
                },
                {
                    "rating": 5,
                    "content": "Absolutely love this cheetah print sweater! The material is super soft and warm, and it fits perfectly. It's become my go-to piece for casual outfits and I get compliments every time I wear it."
                },
                {
                    "rating": 4,
                    "content": "Good quality sweater with a great design. The cheetah print is trendy and it fits well. It could be a bit softer, but it's still a solid buy."
                },
                {
                    "rating": 3,
                    "content": "The sweater is okay. The print is nice, but the fabric is not as soft as I expected. It’s alright for everyday wear."
                },
                {
                    "rating": 5,
                    "content": "This sweater exceeded my expectations. The cheetah print is bold and the fabric feels luxurious. It’s also very warm and has held up well after multiple washes. Highly recommend!"
                },
                {
                    "rating": 2,
                    "content": "The sweater is too small and the print looks different from what was advertised. I'm disappointed with the purchase."
                },
                {
                    "rating": 5,
                    "content": "Cool sweater. My dog liked it."
                },
                {
                    "rating": 3,
                    "content": "It’s a sweater. Not sure what else to say."
                },
                {
                    "rating": 4,
                    "content": "Bought it because I like cheetahs. It’s warm."
                },
                {
                    "rating": 2,
                    "content": "I don't know. I guess it's okay."
                },
                {
                    "rating": 1,
                    "content": "Why does this sweater even exist? Not impressed."
                },
                {
                    "rating": 4,
                    "content": "Sweater good. Cheetahs are cool."
                },
                {
                    "rating": 2,
                    "content": "It’s just a sweater. Nothing special."
                },
                {
                    "rating": 3,
                    "content": "I wear it sometimes. It’s fine."
                },
                {
                    "rating": 1,
                    "content": "Meh. I thought it would be better."
                },
                {
                    "rating": 5,
                    "content": "It’s a sweater. I put it on my body. It works."
                },
            ]
        }
        return response
