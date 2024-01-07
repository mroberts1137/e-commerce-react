import { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import ProductCard from './ProductCard';
//import { selectAll } from './productsSlice';
import { getAllProducts } from '../../utils/backend';

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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

  if (loading) {
    return <div>Looking for products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (Array.isArray(products)) {
    console.log('Products is an array');
    return (
      <Row>
        {products.map((product, idx) => {
          console.log(product);
          return (
            product && (
              <Col md='2' className='m-1' key={idx}>
                <ProductCard product={product} />
              </Col>
            )
          );
        })}
      </Row>
    );
  }
};

export default ProductList;
