import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from "/assets/logo.webp";

const Navbar = () => {
  const toggleLanguageMenu = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMenuOpen(!menuOpen);
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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <img src={logo} alt="PCG Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <div className="relative">
            <button
              className="flex items-center hover:underline"
              onClick={() => toggleDropdown("products")}
            >
              <Link to="/products">
                Products
              </Link>
              <FaAngleDown className={`ml-1 transition-transform ${dropdown.products ? "rotate-180" : ""}`} />
            </button>
            {dropdown.products && (
              <div className="absolute bg-white text-[#075056] w-[200px] mt-2 rounded-md shadow-lg">
                <button onClick={() => handleProductClick("Dog Food")} className="block px-4 py-2 hover:bg-gray-100">Dog Food</button>
                <button onClick={() => handleProductClick("Cat Food")} className="block px-4 py-2 hover:bg-gray-100">Cat Food</button>
              </div>
            )}
          </div>
          <Link to="/store" className="hover:underline">Find a store</Link>
          <div className="relative">
            <button
              className="flex items-center hover:underline"
              onClick={() => toggleDropdown("news")}
            >
              News <FaAngleDown className={`ml-1 transition-transform ${dropdown.news ? "rotate-180" : ""}`} />
            </button>
            {dropdown.news && (
              <div className="absolute bg-white text-[#075056] w-[200px] mt-2 rounded-md shadow-lg">
                <Link to="/news-events" className="block px-4 py-2 hover:bg-gray-100">News & Events</Link>
                <Link to="/tv" className="block px-4 py-2 hover:bg-gray-100">TV Commercials</Link>
              </div>
            )}
          </div>
          <Link to="/blogs" className="hover:underline">Blogs</Link>
          <div className="relative">
            <button
              className="flex items-center hover:underline"
              onClick={() => toggleDropdown("contact")}
            >
              Contact Us <FaAngleDown className={`ml-1 transition-transform ${dropdown.contact ? "rotate-180" : ""}`} />
            </button>
            {dropdown.contact && (
              <div className="absolute bg-white text-[#075056] w-[200px] mt-2 rounded-md shadow-lg">
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
                <Link to="/join-us" className="block px-4 py-2 hover:bg-gray-100">Join Us</Link>
                <Link to="/international-network" className="block px-4 py-2 hover:bg-gray-100">International Network</Link>
              </div>
            )}
          </div>
        </div>

        {/* Icons and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#19325b] px-4 py-2 rounded-md border-2 flex items-center hover:bg-[#19325b] hover:text-white ">
            <MdShoppingCart className="mr-1" /> Shop Online
          </button>
          <div className="hidden lg:block text-[#19325b] text-xl">
            <IoMdSearch />
          </div>
          <button onClick={toggleMobileMenu} className="text-3xl md:hidden">
            {menuOpen ? <IoMdClose /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[#19325b] text-white z-50 flex flex-col items-center pt-16 space-y-6">
            <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-3xl">
              <IoMdClose />
            </button>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="PCG Logo" className="bg-white h-14 mb-4" />
            </Link>
            <Link to="/about" className="text-lg" onClick={() => setMenuOpen(false)}>About Us</Link>
            <button onClick={() => toggleDropdown("products")} className="text-lg flex items-center">
              <Link to="/products">
                Products
              </Link>
              <FaAngleDown className={`ml-2 transition-transform ${dropdown.products ? "rotate-180" : ""}`} />
            </button>
            {dropdown.products && (
              <div className="bg-[#19325b] text-white w-full text-center flex flex-col items-center">
                <button onClick={() => handleProductClick("Dog Food")} className="block w-full px-4 py-2 text-center">
                  Dog Food
                </button>
                <button onClick={() => handleProductClick("Cat Food")} className="block w-full px-4 py-2 text-center">
                  Cat Food
                </button>
              </div>
            )}
            <Link to="/store" className="text-lg" onClick={() => setMenuOpen(false)}>Find a store</Link>
            <button onClick={() => toggleDropdown("news")} className="text-lg flex items-center">
              News <FaAngleDown className={`ml-2 transition-transform ${dropdown.news ? "rotate-180" : ""}`} />
            </button>
            {dropdown.news && (
              <div className="bg-[#19325b] text-white w-full text-center">
                <Link to="/news-events" className="block px-4 py-2">News & Events</Link>
                <Link to="/tv" className="block px-4 py-2">TV Commercials</Link>
              </div>
            )}
            <Link to="/blogs" className="text-lg" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <button onClick={() => toggleDropdown("contact")} className="text-lg flex items-center">
              Contact Us <FaAngleDown className={`ml-2 transition-transform ${dropdown.contact ? "rotate-180" : ""}`} />
            </button>
            {dropdown.contact && (
              <div className="bg-[#19325b] text-white w-full text-center">
                <Link to="/contact" className="block px-4 py-2">Contact Us</Link>
                <Link to="/join-us" className="block px-4 py-2">Join Us</Link>
                <Link to="/international-network" className="block px-4 py-2">International Network</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
