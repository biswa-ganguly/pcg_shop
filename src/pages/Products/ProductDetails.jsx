import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SocialMediaSlider from '../../components/SocialMediaSlider';
import Slider from 'react-slick'; 
import productsData from '../../constants/products.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Add the useNavigate hook for redirection
  const [quantity, setQuantity] = useState(1); // Quantity state

  const products = productsData.product;

  if (!Array.isArray(products)) {
    console.error("productsData.product is not an array:", products);
    return <p>Invalid product data</p>;
  }

  const product = products.find(p => p["SKU Code"] === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const relatedProducts = products.filter(p => p["SKU Code"] !== product["SKU Code"]).slice(0, 4);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  const productImages = Object.keys(product)
    .filter(key => key.startsWith("Image"))
    .map(key => product[key])
    .filter(Boolean);

  const productImageSliderSettings = {
    dots: true,
    infinite: productImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Handle quantity increase and decrease
  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  // Handle View More button click
  const handleViewMore = () => {
    navigate('/products'); // Navigate to the products page
  };

  return (
    <main>
     
      <div className="p-8 lg:flex lg:justify-between lg:items-start">
        
        {/* Left Section: Product Image */}
        <div className="lg:w-1/2">
          <Slider {...productImageSliderSettings}>
            {productImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${product["Product Tittle for ecom"]} - Image ${index + 1}`} 
                className="w-[40%] lg:h-[40vw]  rounded shadow-lg" 
              />
            ))}
          </Slider>
        </div>

  
        <div className="lg:w-1/2 lg:ml-8 mt-6 lg:mt-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product["Product Tittle for ecom"]}</h1>
          
          
          <div className="flex items-center text-2xl mb-8">
            <span className="text-gray-800 font-semibold mr-4">${product["Price"]}</span>
            {product["Discounted Price"] && (
              <span className="text-red-600 line-through">${product["Discounted Price"]}</span>
            )}
          </div>

    
          <div className="flex items-center mb-4">
            <label className="text-gray-700 mr-4">Quantity:</label>
            <div className="flex items-center border rounded w-24">
              <button onClick={() => handleQuantityChange(-1)} className="p-2 text-lg font-semibold">−</button>
              <input type="number" min="1" value={quantity} readOnly className="w-12 text-center"/>
              <button onClick={() => handleQuantityChange(1)} className="p-2 text-lg font-semibold">+</button>
            </div>
          </div>

          {product["Product Description"] && (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-2">Product Description</h2>
    <p className="text-gray-600">{product["Product Description"]}</p>
  </div>
)}

        </div>
      </div>

    
      <div className="p-8 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct["SKU Code"]} product={relatedProduct} />
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <Slider {...sliderSettings}>
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct["SKU Code"]} product={relatedProduct} />
            ))}
          </Slider>
        </div>

        {/* View More Button */}
        <div className="mt-6 text-center">
          <button 
            onClick={handleViewMore} 
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
            View More
          </button>
        </div>
      </div>

      <Footer />
      <SocialMediaSlider />
    </main>
  );
};

export default ProductDetails;
