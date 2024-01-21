import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductCard.css';

/*
Data from fakestoreapi is an object with properties:
{
  id, title, price, category, description, image, rating: {rate, count}
}
*/

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating, category, featured } = product;

  return (
    <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
      <Card className='product-card'>
        <CardImg src={image} alt={title} className='product-img' />
        <CardBody>
          <CardTitle className='product-title'>{title}</CardTitle>
          <CardText>${price}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
