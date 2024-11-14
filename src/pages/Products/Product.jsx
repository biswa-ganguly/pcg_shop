import React from 'react';
import ProductList from './ProductList';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SocialMediaSlider from '../../components/SocialMediaSlider';
import ProductHero from './ProductHero';
import productsData from '../../constants/products.json';

function Product() {
  return (
    <main>
      
      <ProductHero />
      <div>
        <ProductList products={productsData} />
      </div>
      <Footer />
      {/* <SocialMediaSlider /> */}
    </main>
  );
}

export default Product;
