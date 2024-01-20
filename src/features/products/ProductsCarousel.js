import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { selectFeatured } from './productsSlice';
import { useState } from 'react';

const ProductsCarousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      caption: 'Sample Caption One',
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png',
      altText: 'Slide One'
    },
    {
      caption: 'Sample Caption Two',
      src: 'https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png',
      altText: 'Slide Two'
    }
  ];

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
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div
      style={{
        display: 'block',
        width: 320,
        padding: 30
      }}
    >
      <h8>Featured Products</h8>
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
