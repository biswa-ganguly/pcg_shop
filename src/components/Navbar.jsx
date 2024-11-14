import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState({
    products: false,
    news: false,
    contact: false,
  });

  const navigate = useNavigate();

  const toggleDropdown = (key) => {
    setDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleProductClick = (category) => {
    navigate(`/products?category=${category}`);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white text-[#19325b] shadow-lg sticky top-0 z-50">
      {/* Top Navigation Bar */}
      <div className="bg-[#19325b] text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <Link to="/aboutus" className="hover:underline">About Us</Link>
            <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
            <Link to="/overseas-branches" className="hover:underline">Overseas Branches</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section and Hamburger Menu on Mobile */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src={logo} alt="PCG Logo" className="h-14 w-auto" />
          </Link>
          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl">
              {menuOpen ? <IoMdClose /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {/* <div className="md:hidden mt-4 w-full">
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md w-full">
            <input
              type="text"
              placeholder="Find products for your pet"
              className="bg-gray-100 outline-none w-full text-gray-600 placeholder-gray-400"
            />
            <button className="text-[#19325b]">
              <IoMdSearch />
            </button>
          </div>
        </div> */}

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-md w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Find products for your pet"
            className="bg-gray-100 outline-none w-full text-gray-600 placeholder-gray-400"
          />
          <button className="text-[#19325b]">
            <IoMdSearch />
          </button>
        </div>

        {/* Right Section - Warranty and Fast Delivery */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center">
            <img src="/assets/warranty-icon.png" alt="Warranty" className="h-6 w-6 mr-2" />
            <div>
              <p className="text-[#19325b] font-semibold">Warranty</p>
              <p className="text-sm text-gray-600">100% authentic products</p>
            </div>
          </div>
          <div className="flex items-center">
            <img src="/assets/delivery-icon.png" alt="Fast Delivery" className="h-6 w-6 mr-2" />
            <div>
              <p className="text-[#19325b] font-semibold">Fast Delivery</p>
              <p className="text-sm text-gray-600">Track status instantly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center space-x-6 py-2 bg-gray-50">
        <Link to="/products" className="hover:underline">Product Categories</Link>
        <Link to="/product-brand" className="hover:underline">Product Brand</Link>
        <Link to="/donation" className="hover:underline">Products for donation</Link>
        <Link to="/promotion" className="hover:underline">Promotion</Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#19325b] text-white z-50 flex flex-col items-center pt-12 space-y-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-3xl">
            <IoMdClose />
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="PCG Logo" className="bg-white h-14 mb-4" />
          </Link>
          <Link to="/about" className="text-lg" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/products" className="text-lg" onClick={() => setMenuOpen(false)}>Product Categories</Link>
          <Link to="/product-brand" className="text-lg" onClick={() => setMenuOpen(false)}>Product Brand</Link>
          <Link to="/donation" className="text-lg" onClick={() => setMenuOpen(false)}>Products for donation</Link>
          <Link to="/promotion" className="text-lg" onClick={() => setMenuOpen(false)}>Promotion</Link>
          <Link to="/terms" className="text-lg" onClick={() => setMenuOpen(false)}>Terms and Conditions</Link>
          <Link to="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link to="/overseas-branches" className="text-lg" onClick={() => setMenuOpen(false)}>Overseas Branches</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
