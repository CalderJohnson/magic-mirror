"""CLI interface with the product analyzer"""
from analyzer.interface import ProductAnalyzer

def main():
    while True:
        product_id = input("Enter the product ID: ")
        store = input("Enter the store: ")
        product_info = ProductAnalyzer.get_product_information(product_id, store)
        print(product_info) 
        
main()
