import React, { useState } from "react";
import axios from "axios";
import "./AddProduct.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    const productData = {
      name,
      price: parseFloat(price),
      description,
    };
  
    console.log("Sending product data:", productData); // Log the data being sent
  
    axios.post("http://127.0.0.1:5000/api/products", {
      name,
      price: parseFloat(price),
      description,
  })
  .then(() => {
      setSuccess(true);
      setLoading(false);
      setName("");
      setPrice("");
      setDescription("");
  })
  .catch((error) => {
      console.error("Error adding product:", error);  // Log the error in the frontend
      setError("Error adding product. Please try again.");
      setLoading(false);
  });
  
  };
  

  return (
    <div className="add-product">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        {/* Show loading spinner when submitting */}
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>

      {success && <p className="success-message">Product added successfully!</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default AddProduct;
