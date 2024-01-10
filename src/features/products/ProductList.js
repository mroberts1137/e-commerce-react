import React, { useState, useEffect } from "react";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../../utils/backend";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("Featured"); // Initial sort option

  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
        console.log("fetched data");
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
        console.log("error fetching data");
      });
  }, []);

  const handleSortChange = (option) => {
    // Function to handle sort option change
    setSortBy(option);
    // Additional logic for sorting products based on the selected option
    // Modify this logic according to your sorting requirements and data structure
    let sortedProducts = [];

    if (option === "Featured") {
      sortedProducts = [...products]; // Default order
    } else if (option === "AZ") {
      sortedProducts = [...products].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (option === "ZA") {
      sortedProducts = [...products].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    } else if (option === "LowToHigh") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (option === "HighToLow") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (option === "OldToNew") {
      sortedProducts = [...products].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    } else if (option === "NewToOld") {
      sortedProducts = [...products].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }

    setProducts(sortedProducts);
  };

  // Rendering logic
  if (loading) {
    return <div>Looking for products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (Array.isArray(products)) {
    return (
      <div>
        <h1>Products</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Sort by dropdown */}
          <label htmlFor="sortOptions">Sort By:</label>
          <select
            id="sortOptions"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortBy}
          >
            <option value="Featured">Featured</option>
            <option value="AZ">Alphabetically, A-Z</option>
            <option value="ZA">Alphabetically, Z-A</option>
            <option value="LowToHigh">Price, Low to High</option>
            <option value="HighToLow">Price, High to Low</option>
            <option value="OldToNew">Date, Old to New</option>
            <option value="NewToOld">Date, New to Old</option>
          </select>
        </div>
        {/* Product count */}
        <div>{products.length} products</div>
        {/* Product cards */}
        <Row>
          {products.map(
            (product, idx) =>
              product && (
                <Col md="2" className="m-1" key={idx}>
                  <ProductCard product={product} />
                </Col>
              )
          )}
        </Row>
      </div>
    );
  }
};

export default ProductList;
