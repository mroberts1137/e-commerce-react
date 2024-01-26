import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { title, image } = item.product;
  console.log(item);
  const dispatch = useDispatch();

  return (
    <div className='item-card flex-column'>
      <h5>{title}</h5>
      <div className='flex-row'>
        <img src={image} alt={title} className='product-img' />
        <div className='flex-column'>
          <p>Quantity: {item.quantity}</p>
          <Button outline onClick={() => dispatch(removeItem(item))}>
            Remove Item
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
