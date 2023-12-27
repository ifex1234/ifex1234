import '../styles/storeSlide.scss'
import { useState } from "react";
import { Carousel } from 'react-bootstrap';
import { Carousel2 } from '../assets/data/carousel1';
import image1 from '../assets/image/carousel/Desktop_MLP_slider__1.jpg'
import image2 from '../assets/image/carousel/Desktop_MLP_slider__2.jpg'
import image3 from '../assets/image/carousel/Desktop_MLP_slider3.jpg'
import image4 from '../assets/image/carousel/Desktop_MLP_Slider4.png'
import image5 from '../assets/image/carousel/Desktop-MLP-slider5.jpg'
import image6 from '../assets/image/carousel/mlp.jpg'


const StoreSlide = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slideContainer2">
      <div className="Carousel2">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Carousel2 image={image1} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel2 image={image2}  />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel2 image={image3} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel2 image={image4} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel2 image={image5} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel2 image={image6} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default StoreSlide;
