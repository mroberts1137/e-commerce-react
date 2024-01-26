import { useSelector } from 'react-redux';
import { selectAll } from './cartSlice.js';
import CartItem from './CartItem';

const CartDisplay = () => {
  const items = useSelector(selectAll);

  return (
    <div>
      {items.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default CartDisplay;
