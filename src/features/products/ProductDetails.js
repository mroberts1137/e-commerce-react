import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectById, selectByCategory } from './productsSlice';
import { Button } from 'reactstrap';
import SimilarProducts from './SimilarProducts';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector(selectById(productId));
  const { image, title, price, description, featured, category, rating } =
    product;
  const similarProducts = useSelector(selectByCategory(category));

  return (
    <div className='flex-column'>
      <h1>{title}</h1>

      <div className='flex-row product-details'>
        <img src={image} alt={title} />

        <div className='flex-column'>
          <p>{description}</p>
          <p>
            <strong>Price: ${price}</strong>
          </p>
          <Button>Add To Cart</Button>
        </div>
      </div>

      <SimilarProducts category={category} />
    </div>
  );
};

export default ProductDetails;
