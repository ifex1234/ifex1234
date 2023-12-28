import "../styles/App.scss"
import PropTypes from 'prop-types'

const SubHeader = ({item1, item2, color}) => {
  return (
    <div className={color}>
      <div><p> {item1}</p>
       
        </div>
      <div>
        <p>{item2}</p>  
      </div>
    </div>
  )
}

SubHeader.propTypes = {
  item1:PropTypes.string,
  item2:PropTypes.string,
  color:PropTypes.string
}

export default SubHeader;