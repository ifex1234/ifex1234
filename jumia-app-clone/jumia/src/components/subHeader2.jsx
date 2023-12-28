
import PropTypes from 'prop-types'

const SubHeader2 = ({title, color}) => {
  return (
    <div className={color}>
      <h5>{title}</h5>
      </div>
  )
}

SubHeader2.propTypes = {
  title:PropTypes.string,
  color:PropTypes.string
}

export default SubHeader2