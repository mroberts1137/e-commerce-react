import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { selectById, selectByCategory } from './productsSlice';
import { addItem, getCartSize } from '../cart/cartSlice';
import { Button } from 'reactstrap';
import SimilarProducts from './SimilarProducts';
import './ProductDetails.css';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector(selectById(productId));
  const { image, title, price, description, featured, category, rating } =
    product;

  // add-to-cart code
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const cartSize = useSelector(getCartSize);

  const addItemToCart = () => {
    dispatch(
      addItem({
        id: cartSize + 1,
        quantity: parseInt(quantity),
        product
      })
    );
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

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

          <div className='flex-row' style={{ gap: '10px' }}>
            <p>Qty: </p>
            <select id='qty-selector' onChange={handleChange} value={quantity}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <Button onClick={addItemToCart}>Add To Cart</Button>
          </div>
        </div>
      </div>

      <SimilarProducts category={category} />
    </div>
  );
};

export default ProductDetails;
