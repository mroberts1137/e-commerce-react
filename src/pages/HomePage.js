import ProductsCarousel from '../features/products/ProductsCarousel';
import ProductList from '../features/products/ProductList';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      <ProductsCarousel />
      <ProductList />
    </div>
  );
};

export default HomePage;
