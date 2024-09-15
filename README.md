# MAGIC MIRROR

As fashion enthusiasts, we realized a core issue in online shopping: the gap between expectation and reality. The inability to physically try on clothes creates uncertainty in sizing, fit, and overall appearance, creating frustration and anxiety. After doing a market analysis of potential competing products, we realized that there is **no publicly accessible solution that can feasibly be used.**
This challenge inspired us to re-imagine the online shopping experience, aiming not just to empower shoppers with better decisions but to enhance their confidence in the choices they make. **Magic Mirror** bridges the gap between the digital and physical worlds, allowing consumers to visualize how they’d look in an outfit _before making the purchase_. It's not just about finding the perfect fit; it’s about making sure _every_ shopper can see themselves in the style they aspire to—making shopping a more informed and delightful experience.

##What it does
**Magic Mirror** offers two transformative features that redefine the online shopping journey:

In-Depth Product Insights: Shoppers can access a comprehensive overview of product reviews, ratings, and summaries. By utilizing natural language processing, **Magic Mirror** curates detailed insights from a variety of sources. This empowers shoppers to not only make informed decisions but also feel _confident_ in their choices. The feature fosters transparency, enabling businesses to build long-term trust and customer loyalty by offering genuine, data-backed insights.

Virtual Try-On: This core functionality allows users to upload an image of themselves and see how the clothes they are considering purchasing would look on them. Using advanced AI techniques, including image segmentation and inpainting with stable diffusion, **Magic Mirror** overlays garments with high fidelity, giving users a realistic preview of their future look. This not only reduces shopper regret but also contributes to fewer product returns, benefiting _both_ consumers and businesses. A satisfied customer is more likely to return, making this feature essential for driving long-term business growth.

Behind the scenes, **Magic Mirror runs a powerful computational pipeline**, sorting and analyzing vast amounts of product information. The AI-driven system also outlines the pros and cons of each item. By seamlessly blending product insights and cutting-edge virtual try-ons, **Magic Mirror** turns a once-daunting decision into a delightful, confidence-building process.

## How to run
### Website API:
1. navigate to /api
2. run venv: garmentApp
3. run: uvicorn api:app --reload

### Image-Generation API:
1. navigate to /api/imggen
2. run venv (if not already on): garmentApp
3. run: uvicorn img_api:app --reload --port:8080
