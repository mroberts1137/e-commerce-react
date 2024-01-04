import { Col, Row } from 'reactstrap';
import ProductCard from './ProductCard';
import { selectAll } from './productsSlice';

const ProductList = () => {
  const items = selectAll();

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col md className="m-1" key={idx}>
              <ProductCard item={item} />
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default ProductList;
