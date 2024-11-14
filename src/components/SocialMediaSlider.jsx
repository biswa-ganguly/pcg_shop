import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialMediaSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="sticky bottom-0 w-full bg-white py-2 z-20 overflow-hidden">
      <Slider {...settings} className="flex items-center">
      
        <div className="text-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">APro IQ</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">LuvCare</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">Me-O</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">SmartHeart</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">Youtube</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">Youtube</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">Youtube</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">Youtube</p>
          </a>
        </div>
        <div className="text-center">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-3xl mx-auto hover:text-gray-300 transition-colors" />
            <p className="">Youtube</p>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default SocialMediaSlider;
