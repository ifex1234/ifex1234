import PropTypes from 'prop-types'
import "../styles/category.scss"

const CategoryCard = ({items}) => {
  return (

        <div className="card-container">
        {items.map((item) => (
          <div key={item.id} className="card-items card">
            <div className="img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="px-1">
              <p>{item.title}</p>
            </div>
            <div className="px-1">
              <span>{item.price}</span>
            </div>
            <div className="px-1 line-price">
              <span>{item.price} </span>-8% 
            </div>
            <div className="m-3 line-price">
            </div>
            <div className="m-3 line-price">
            </div>
            <div className="px-1 ">
              <button>ADD TO CART</button>
            </div>

          </div>
        ))}
    </div>
    
   
  )
}

CategoryCard.propTypes = {
  items: PropTypes.array,
}

export default CategoryCard