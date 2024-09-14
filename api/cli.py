"""CLI interface with the product analyzer"""
from textproc.interface import ProductAnalyzer

def main():
    while True:
        product_id = input("Enter the product ID: ")
        product_info = ProductAnalyzer.get_product_information(product_id)
        print(product_info)
        
        
main()