import { useState, useEffect } from 'react';
//import { Col, Row } from 'reactstrap';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import { useSelector } from 'react-redux';
import { selectAll } from './productsSlice';
import './ProductsList.css';

/*
Data from fakestoreapi is an object with properties:
{
  id, title, price, category, description, image, rating: {rate, count}
}
*/

const ProductList = () => {
  const products = useSelector(selectAll);
  const [sortedProducts, setSortedProducts] = useState(products || []);
  const [sortBy, setSortBy] = useState('All'); // Initial sort option
  const isLoading = useSelector((state) => state.products.isLoading);
  const errMsg = useSelector((state) => state.products.errMsg);

  useEffect(() => {
    setSortedProducts(products);
  }, [products]);

  const handleSortChange = (e) => {
    // Function to handle sort option change
    setSortBy(e.target.value);
    setSortedProducts(filterProducts(e.target.value));
  };

  const filterProducts = (option) => {
    // Additional logic for sorting products based on the selected option
    // Modify this logic according to your sorting requirements and data structure
    switch (option) {
      case 'All':
        return products;
      case 'Featured':
        return products.filter((product) => product.featured);
      case 'Mens':
        return products.filter(
          (product) => product.category === "men's clothing"
        );
      case 'Womens':
        return products.filter(
          (product) => product.category === "women's clothing"
        );
      case 'Jewelery':
        return products.filter((product) => product.category === 'jewelery');
      case 'Electronics':
        return products.filter((product) => product.category === 'electronics');
      case 'AZ':
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
      case 'ZA':
        return [...products].sort((a, b) => b.title.localeCompare(a.title));
      case 'LowToHigh':
        return [...products].sort((a, b) => a.price - b.price);
      case 'HighToLow':
        return [...products].sort((a, b) => b.price - a.price);
      case 'OldToNew':
        return [...products].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
      case 'NewToOld':
        return [...products].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      default:
        return products;
    }
  };

  // Rendering logic
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errMsg) {
    return <div>Error: {errMsg}</div>;
  }

  return (
    <div>
      <div className='products-header'>
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
      </div>

      {/* Product cards */}
      <Grid container spacing={2} className='product-grid'>
        {sortedProducts.map(
          (product, idx) =>
            product && (
              <Grid item xs={3} md={2} className='product-grid-item' key={idx}>
                <ProductCard product={product} />
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default ProductList;
