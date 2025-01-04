import React from "react";
import "./ProductCard.css"; // Ensure you have appropriate CSS for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Display product image */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      )}
      {/* Display product name */}
      <h3>{product.name}</h3>
      {/* Display product price */}
      <p className="price">Price: ${product.price}</p>
      {/* Display product description */}
      <p>{product.description}</p>
      {/* Add to Cart button */}
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
