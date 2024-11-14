import React from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <main>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold">{product["Product Tittle for ecom"]}</h1>
        
        
        <div className="w-[50%] lg:w-[25%] mx-auto mt-4">
          <Slider {...productImageSliderSettings}>
            {productImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${product["Product Tittle for ecom"]} - Image ${index + 1}`} 
                className="w-full h-96 object-cover rounded" 
              />
            ))}
          </Slider>
        </div>
        
        <p className="mt-4">Description: {product["Product Description"]}</p>

        <div className="mt-8">
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
        </div>
      </div>
      <Footer />
      <SocialMediaSlider />
    </main>
  );
};

export default ProductDetails;
