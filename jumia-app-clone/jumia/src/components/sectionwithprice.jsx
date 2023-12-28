import "../styles/sectionwithprice.scss";
import '../styles/App.scss'
import PropTypes from 'prop-types'

export const Sectionwithprice = ({arrayItem}) => {
  return (
    <div className="p_container">
        {arrayItem.map((contents) => (
          <div key={contents.id} className="p_main card">
            <div className="p_content">
              <img src={contents.image} alt={contents.title} />
              <div className="text">{contents.title}</div>
            </div>
          </div>
        ))}
      </div> 
  );
};

Sectionwithprice.propTypes = {
  arrayItem : PropTypes.array
}
