import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

/*
Data from fakestoreapi is an object with properties:
{
  id, title, price, category, description, image, rating: {rate, count}
}
*/

const ProductCard = ({ product }) => {
  const { id, image, title, description, rating, category } = product;

  return (
    <Link to={`/products/${id}`}>
      <Card>
        <CardImg src={image} alt={title} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{category}</CardText>
          <CardText>{rating.rate}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
