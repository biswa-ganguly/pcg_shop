import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import products from "../../constants/products.json";

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ category: "", subCategory: "" });
  const [itemsToShow, setItemsToShow] = useState(9);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category") || "";

    setFilters((prevFilters) => ({
      ...prevFilters,
      category: category,
    }));
  }, [location]);

  useEffect(() => {
    const applyFilters = () => {
      let updatedProducts = products.product || [];
      if (filters.category) {
        updatedProducts = updatedProducts.filter(
          (product) => product.Category === filters.category
        );
      }
      if (filters.subCategory) {
        updatedProducts = updatedProducts.filter(
          (product) => product["Sub Category"] === filters.subCategory
        );
      }
      setFilteredProducts(updatedProducts);
    };
    applyFilters();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleViewMore = () => {
    setItemsToShow((prev) => prev + 9);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/4 p-4 border-r lg:border-r-2 lg:border-gray-200 lg:mb-0 mb-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            className="w-full border p-2 rounded"
          >
            <option value="">All</option>
            <option value="Dog Food">Dog Food</option>
            <option value="Cat Food">Cat Food</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Sub Category</label>
          <select
            name="subCategory"
            value={filters.subCategory}
            onChange={handleFilterChange}
            className="w-full border p-2 rounded"
          >
            <option value="">All</option>
            <option value="Cat Dry Food">Cat Dry Food</option>
            <option value="Dog Wet Food">Dog Wet Food</option>
          </select>
        </div>
      </div>
      <div className="lg:w-3/4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.slice(0, itemsToShow).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {itemsToShow < filteredProducts.length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleViewMore}
              className="p-2 bg-blue-500 text-white text-center rounded"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
