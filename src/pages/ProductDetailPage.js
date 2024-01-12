import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectById } from '../features/products/productsSlice';
import ProductCard from '../features/products/ProductCard';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = useSelector(selectById(productId));

  return (
    <div>
      <h1>ProductDetailPage</h1>

      <p>{productId}</p>

      <ProductCard product={product} />

      {/* TODO: similar items banner */}
      <h2>Similar Items</h2>
    </div>
  );
};

export default ProductDetailPage;
