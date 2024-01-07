import { Button } from 'reactstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <h1 className='display-3'>Shop</h1>
      <p className='lead'>
        <Button color='primary'>Learn More</Button>
      </p>
    </div>
  );
};

export default Hero;
