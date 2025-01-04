import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../images/banner.jpg';
import smartphoneImage from '../images/smartphone.jpg';
import laptopImage from '../images/laptop.jpg';
import smartwatchImage from '../images/smartwatch.jpg';
import smartphonesImage from '../images/smartphones.jpg';
import laptopsImage from '../images/laptops.jpg';
import accessoriesImage from '../images/accessories.jpg';
import appliancesImage from '../images/appliances.jpg';

 import './Home.css';

// Data for products and categories
const featuredProducts = [
  {
    id: 1,
    name: 'Smartphone X',
    image: smartphoneImage,
    price: '$499',
    description: 'Latest model with advanced features.',
  },
  {
    id: 2,
    name: 'Laptop Y',
    image: laptopImage,
    price: '$899',
    description: 'High-performance laptop for work and gaming.',
  },
  {
    id: 3,
    name: 'Smartwatch Z',
    image: smartwatchImage,
    price: '$199',
    description: 'Keep track of your health and notifications.',
  },
];

const productCategories = [
  { name: 'Smartphones', image: smartphonesImage },
  { name: 'Laptops', image: laptopsImage },
  { name: 'Accessories', image: accessoriesImage },
  { name: 'Home Appliances', image: appliancesImage },
];

const customerReviews = [
  {
    customer: 'John Doe',
    review: 'Great quality products and fast delivery! Highly recommend this store.',
    rating: 5,
  },
  {
    customer: 'Jane Smith',
    review: 'Amazing shopping experience! Found everything I needed.',
    rating: 4,
  },
];

function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <div className="home-container">
      {/* Hero Banner */}
      <div className="home-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h1>Welcome to the E-Commerce Store</h1>
        <p>Your one-stop shop for all things amazing!</p>
        <Link to="/products">
          <button aria-label="Shop Now">Shop Now</button>
        </Link>
      </div>

      {/* Featured Categories */}
      <div className="categories-section">
        <h2>Shop by Category</h2>
        <div className="categories-list">
          {productCategories.map((category, index) => (
            <div key={index} className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <Link to={`/products/${category.name.toLowerCase()}`}>
                <button aria-label={`Explore ${category.name}`}>Explore {category.name}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span className="price">{product.price}</span>
              <Link to={`/products/${product.id}`}>
                <button aria-label={`View Details of ${product.name}`}>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="customer-reviews">
        <h2>What Our Customers Say</h2>
        <div className="reviews-list">
          {customerReviews.map((review, index) => (
            <div key={index} className="review-card">
              <h3>{review.customer}</h3>
              <p>{review.review}</p>
              <div className="rating">
                {'★'.repeat(review.rating)}{' '}
                {'☆'.repeat(5 - review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promotions */}
      <div className="promotions">
        <h2>Exclusive Offers</h2>
        <div className="promotion-cards">
          <div className="promotion-card">
            <h3>Buy 1 Get 1 Free!</h3>
            <p>On select products, only this week!</p>
            <Link to="/products">
              <button aria-label="Shop Now for Buy 1 Get 1 Free Offer">Shop Now</button>
            </Link>
          </div>
          <div className="promotion-card">
            <h3>Up to 50% Off!</h3>
            <p>Get massive discounts on best-selling items.</p>
            <Link to="/products">
              <button aria-label="Shop Now for Discounts">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and exclusive offers right in your inbox!</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" aria-label="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
