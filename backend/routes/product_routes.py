import logging
logging.basicConfig(level=logging.DEBUG)
from flask import Blueprint, app, request, jsonify
from models.product import Product
from services.database import db

product_bp = Blueprint("product_bp", __name__, url_prefix="/api/products")

# Get all products
@product_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

# Add a new product
@product_bp.route("", methods=["POST"])
 
def add_product():
    try:
        data = request.json
        print("Received data:", data)  # Log the incoming data
        
        if not data.get("name") or not data.get("description") or not data.get("price"):
            return jsonify({"error": "Missing required fields"}), 400
        
        product = Product(
            name=data["name"],
            description=data["description"],
            price=data["price"]
        )
        db.session.add(product)
        db.session.commit()
        
        return jsonify(product.to_dict()), 201

    except Exception as e:
        db.session.rollback()  # Rollback the session in case of any errors
        logging.error(f"Error adding product: {e}")
        return jsonify({"error": "Internal server error"}), 500




# Get product details by ID
@product_bp.route("/<int:product_id>", methods=["GET"])
def get_product_details(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify(product.to_dict())
