import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Product from './pages/Products/Product'
import ProductDetails from './pages/Products/ProductDetails'
import Navbar from './components/Navbar' 
import Homepage from './pages/Home/Homepage'

export default function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo(0, 0); 
    }, [location.pathname]);
    return children;
  };


  return (
    <BrowserRouter>
    <Navbar/>
      <Wrapper>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

