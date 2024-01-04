import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const { id, image, name, description, rating } = item;

  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{description}</CardText>
          <CardText>{`Rating: ${rating} out of 5`}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProductCard;
