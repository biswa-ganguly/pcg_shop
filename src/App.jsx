import React, { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Product from './pages/Products/Product'
import ProductDetails from './pages/Products/ProductDetails'
import Navbar from './components/Navbar' // assuming Navbar uses useNavigate

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
      <Wrapper>
        <Routes>
        
          <Route path="/" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

