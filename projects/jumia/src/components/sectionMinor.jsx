import "../styles/sectionMinor.scss";
import "../styles/App.scss";
import PropTypes from "prop-types";
import { section1data } from "../assets/data/section1";

export const SectionMinor = ({ image, title }) => {
  return (
    <div className="m_container">
      {section1data.map((item, idx) => {
        return (
          <div key={idx} className="m_content card">
            <div className="item1">
              <img src={item.Image} alt={item.title} />
            </div>
            <div className="item2">
              <p>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

SectionMinor.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
};
