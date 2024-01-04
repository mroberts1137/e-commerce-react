import { useParams } from 'react-router-dom';
import { selectById } from '../features/products/productsSlice';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const item = selectById(productId);

  return (
    <div>
      <h1>ProductDetailPage</h1>
      <p>Product: {productId}</p>
    </div>
  );
};

export default ProductDetailPage;
