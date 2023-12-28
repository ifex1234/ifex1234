import PropTypes from "prop-types";
import "../styles/sectionBig.scss";
import '../styles/App.scss'
import ProgressBar from "react-bootstrap/ProgressBar";
import { productsData } from "../assets/data/section2";

const SectionBig = (props) => {
  return (
    <div className="Container-section">
      {productsData.slice(0, 6).map((content) => (
        <div key={content.id} className="section-content card"> 
          <div className="section-image">
            <img src={content.image} alt={content.title} />
          </div>
          <div className="section-contents mtNeg">
            <span>{content.title}</span>
          </div>
          <div className="section-contents"> 
            <span>{content.price}</span>
          </div>
          <div className="section-contents">
            <span>{content.itemLeft}</span>
            <ProgressBar now={content.value} variant='danger' />
          </div>
        </div>
      ))}
    </div>
  );
};

SectionBig.propTypes = {};

export default SectionBig;
