import "../styles/sectionBorderless.scss";
import "../styles/App.scss";
import PropTypes from "prop-types";

export const SectionBorderless = ({ arrayItem, header }) => {
  return (
    <div className="bor-container">
      <div className="m-1 p-1"> 
        <h5 className="fw-bold">{header}</h5>
      </div>
      <div className="bor-content ">
        {arrayItem.slice(0, 6).map((item) => (
          <div key={item.id} className="bor-items card">
            <div className="img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="px-2">
              <p>{item.title}</p>
            </div>
            <div className="px-2">
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
SectionBorderless.propTypes = {
  arrayItem: PropTypes.array,
  header: PropTypes.string,
};
