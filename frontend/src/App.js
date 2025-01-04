import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import ProductDetails from './pages/ProductDetails';  // Ensure this import is correct


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/products/:id" element={<ProductDetails />} /> {/* Add this route for ProductDetails */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
