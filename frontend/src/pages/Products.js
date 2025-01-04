import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/api/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response ? error.response.data : "Error fetching products. Please try again.");
        setLoading(false);
      });
  }, []);
  

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="products">
      <h2>Product List</h2>

      {/* Display error message if fetching fails */}
      {error && <p className="error-message">{error}</p>}

      {/* Show products or empty state message */}
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
