import "../styles/slide2.scss";
import mage from '../assets/image/carousel/1.png'
import mage2 from '../assets/image/carousel/5.png'
import mage3 from '../assets/image/carousel/1.png'
import PropTypes from "prop-types";

const Slide2 = (props) => {
    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={mage} style={{ width: "100%" }} />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={mage3} style={{ width: "100%" }} />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={mage} style={{ width: "100%" }} />
          <div className="text">Caption Three</div>
        </div>

        {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
      </div>
      <br />

      {/* <div style="text-align:center">
  <span className="dot" onclick="currentSlide(1)"></span>
  <span className="dot" onclick="currentSlide(2)"></span>
  <span className="dot" onclick="currentSlide(3)"></span>
</div> */}
    </div>
  );
};

Slide2.propTypes = {};

export default Slide2;
