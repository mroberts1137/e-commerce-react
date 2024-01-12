import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../utils/backend';

/*
Data from fakestoreapi is an object with properties:
{
  id, title, price, category, description, image, rating: {rate, count}
}
*/

// TODO:
// set up useSelector for products data.
// currently, products are fetched from api asynchronously

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('Featured'); // Initial sort option
  let sortedProducts = products || [];

  useEffect(() => {
    // fetch database of products on component mounting
    // this should be moved to state management/Redux
    getAllProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
        console.log('fetched data');
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
        console.log('error fetching data');
      });
  }, []);

  const handleSortChange = (e) => {
    // Function to handle sort option change
    setSortBy(e.target.value);
  };

  const filterProducts = (option) => {
    // Additional logic for sorting products based on the selected option
    // Modify this logic according to your sorting requirements and data structure

    if (option === 'Featured') {
      sortedProducts = [...products]; // Default order
    } else if (option === 'AZ') {
      sortedProducts = [...products].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (option === 'ZA') {
      sortedProducts = [...products].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (option === 'LowToHigh') {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (option === 'HighToLow') {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (option === 'OldToNew') {
      sortedProducts = [...products].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    } else if (option === 'NewToOld') {
      sortedProducts = [...products].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
  };

  // sortedProducts is reset every re-render so update it to filtered options
  if (products) filterProducts(sortBy);

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
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* Sort by dropdown */}
          <ProductsFilter sortBy={sortBy} handleSortChange={handleSortChange} />
        </div>

        {/* Product count */}
        <div>{sortedProducts.length} products</div>

        {/* Product cards */}
        <Row>
          {sortedProducts.map(
            (product, idx) =>
              product && (
                <Col md='2' className='m-1' key={idx}>
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
