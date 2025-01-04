# app.py
from flask import Flask
from flask_cors import CORS
from services.database import db
from services.init_db import init_db  # Import init_db from the new module
from routes.product_routes import product_bp  # Import product routes
from flask_migrate import Migrate

app = Flask(__name__)
CORS(app )  # Adjust based on your frontend's URL


# Configuration for DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.db?timeout=30'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)

# Initialize DB
init_db(app)

# Register product routes with correct blueprint
app.register_blueprint(product_bp, url_prefix="/api/products")

if __name__ == "__main__":
    app.run(debug=True)
