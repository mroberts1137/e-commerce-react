import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { selectByCategory } from './productsSlice';
import './ProductsList.css';

/*
Data from fakestoreapi is an object with properties:
{
  id, title, price, category, description, image, rating: {rate, count}
}
*/

const SimilarProducts = ({ category }) => {
  const products = useSelector(selectByCategory(category));
  const isLoading = useSelector((state) => state.products.isLoading);
  const errMsg = useSelector((state) => state.products.errMsg);

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
        <h1>Similar Products</h1>
      </div>

      {/* Product cards */}
      <Grid container spacing={2} className='product-grid'>
        {products.map(
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

export default SimilarProducts;
