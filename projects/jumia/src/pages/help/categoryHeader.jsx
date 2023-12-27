import PropTypes from 'prop-types'
import "../../styles/category.scss"

const CategoryHeader = props => {
  return (
    <div className='CategoryHeader-container'>
        <div className='CategoryHeader-item1'>
            <div><h5>SuperMarket</h5></div>
            <div>Sort by</div>
        </div>
        <div className='CategoryHeader-item1'>
            <div><p>70545 products found</p></div>
            <div></div>
        </div>
    </div>
  )
}

CategoryHeader.propTypes = {}

export default CategoryHeader