import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(prev => !prev);
  };

  return (
    <Link to={`/products/${product["SKU Code"]}`}>
      <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-200 h-[500px]">
        <img
          src={product["Image 1"]} 
          alt={product["Product Tittle for ecom"]}
          className="w- h-[250px] object-cover mx-auto mt-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">{product["Product Tittle for ecom"]}</h3>
        
        <p className={`text-gray-700 mb-2 ${showFullDescription ? '' : 'line-clamp-3'}`}>
          {product["Product Description"]}
        </p>

        
        {!showFullDescription && product["Product Description"]?.length > 100 && (
          <button 
            onClick={toggleDescription}
            className="text-blue-500  text-sm mt-2"
          >
            View More
          </button>
        )}

        {showFullDescription && (
          <button 
            onClick={toggleDescription}
            className="text-blue-500 text-sm mt-2"
          >
            View Less
          </button>
        )}

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">SKU: {product["SKU Code"]}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;