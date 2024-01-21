import { Button } from 'reactstrap';
import ProductsCarousel from '../features/products/ProductsCarousel';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <ProductsCarousel />
    </div>
  );
};

export default Hero;
