"""CLI interface with the product analyzer"""
from analyzer.interface import ProductAnalyzer
from imggen.app import ImageGenerator

def main():
    while True:
        product_id = input("Enter the product ID: ")
        product_info = ProductAnalyzer.get_product_information(product_id)
        print(product_info) 
        
main()
