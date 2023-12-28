import "../styles/slide.scss";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../assets/data/carousel1";
import image1 from "../assets/image/carousel/1.png";
import image2 from "../assets/image/carousel/2.gif";
import image3 from "../assets/image/carousel/3.jpg";
import image4 from "../assets/image/carousel/4.jpg";
import image5 from "../assets/image/carousel/5.png";
import image6 from "../assets/image/carousel/6.jpg";
import image7 from "../assets/image/carousel/7.jpg";
import image8 from "../assets/image/carousel/8.jpg";
import image9 from "../assets/image/carousel/bsb.jpg";
import image10 from "../assets/image/carousel/jForce.png";
import { NavLink } from "react-router-dom";
import { Home, Computer,} from "@mui/icons-material";
import { PhoneAndroid } from "@mui/icons-material";


const Slide = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="slideContainer">
      <div className="verticalNav ">
        <ul className="flex-column nav-link">
          <li><NavLink to="supermarket"  className='nav-list' >Supermarket</NavLink></li>
          <li><NavLink to="health" className='nav-list'>Health & Beauty</NavLink></li>
          <li><Home/> <NavLink to='homeandoffice'  className='nav-list'>Home & Office</NavLink></li>
          <li><NavLink to='appliances' className='nav-list'>Appliances</NavLink></li>
          <li> <PhoneAndroid/><NavLink to='phones' className='nav-list'>Phones & Tablets</NavLink></li>
          <li> <Computer/><NavLink to='computing' className='nav-list'>Computing</NavLink></li>
          <li><NavLink to='electronics' className='nav-list'>Electronics</NavLink></li>
          <li><NavLink to="fashion"  className='nav-list'>Fashion</NavLink></li>
          <li><NavLink to='babyProducts' className='nav-list'>Baby Products</NavLink></li>
          <li> <NavLink to="gaming" className='nav-list'>Gaming</NavLink></li>
          <li> <NavLink to="sporting" className='nav-list'>Sporting Goods</NavLink></li>
          <li><NavLink to="othercategory" className='nav-list'>Other categories</NavLink></li>       
          </ul>
      </div>
      <div className="Carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <Carousel1 image={image1} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image2}  />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image3} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image4} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image5} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image6} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image7} />
          </Carousel.Item>
          <Carousel.Item>
            <Carousel1 image={image8} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="other">
        <div className="otherContent mb-4">
          <img src={image10} alt="" />
        </div>
        <div className="otherContent">
          <img src={image9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
