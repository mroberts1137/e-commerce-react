import { useParams } from 'react-router-dom';
import { selectById } from '../features/products/productsSlice';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const item = selectById(productId);
  console.log(item);

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <p>Product: {productId}</p>
      <h2>Similar Items</h2>
    </div>
  );
};

export default ProductDetailPage;
