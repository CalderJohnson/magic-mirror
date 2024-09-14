"""CLI interface with the product analyzer"""
from textproc.interface import ProductAnalyzer
from imggen.app import ImageGenerator

TEST_ANALYZER = False
TEST_IMGGEN = True

def main():
    while True:
        if TEST_ANALYZER:
            product_id = input("Enter the product ID: ")
            product_info = ProductAnalyzer.get_product_information(product_id)
            print(product_info)
        if TEST_IMGGEN:
            user_image_name = input("Enter the user image filename")
            garment_image_name = input("Enter the garment image filename")
            user_image = "../temp/" + user_image_name
            garment_image = "../temp/" + garment_image_name
            ImageGenerator.generate_tryon_image(user_image, garment_image)  
        
main()