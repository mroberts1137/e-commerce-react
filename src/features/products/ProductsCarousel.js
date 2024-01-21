import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectFeatured } from './productsSlice';
import { useState } from 'react';
import './ProductsCarousel.css';

const ProductsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const items = useSelector(selectFeatured);

  const previousButton = () => {
    if (animating) return;
    const nextIndex = (activeIndex - 1) % items.length;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = (activeIndex + 1) % items.length;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item, idx) => {
    return (
      <CarouselItem
        key={idx}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
        className='carousel-item'
      >
        <img src={item.image} alt={item.title} />
      </CarouselItem>
    );
  });

  return (
    <div className='carousel'>
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
        <CarouselControl
          directionText='Prev'
          direction='prev'
          onClickHandler={previousButton}
        />
        <CarouselControl
          directionText='Next'
          direction='next'
          onClickHandler={nextButton}
        />
      </Carousel>
    </div>
  );
};

export default ProductsCarousel;
