import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

// Import images from the src folder
import smartphoneImage from '../images/smartphone.jpg';
import laptopImage from '../images/laptop.jpg';
import smartwatchImage from '../images/smartwatch.jpg';

const products = [
  { id: 1, name: 'Smartphone X', image: smartphoneImage, price: '$499', description: 'Latest model with advanced features.' },
  { id: 2, name: 'Laptop Y', image: laptopImage, price: '$899', description: 'High-performance laptop for work and gaming.' },
  { id: 3, name: 'Smartwatch Z', image: smartwatchImage, price: '$199', description: 'Keep track of your health and notifications.' },
];

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the product details by ID (simulated here)
    const selectedProduct = products.find(p => p.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="description">{product.description}</p>
        <span className="price">{product.price}</span>
        <div className="product-actions">
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
