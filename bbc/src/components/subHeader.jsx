
import PropTypes from 'prop-types'

const SubHeader = ({subHeader}) => {
  return (
    <div className='w-[97%] h-6 bg-inherit m-2 mb-4 px-3 font-bold text-grey'>{subHeader}</div>
  )
}

SubHeader.propTypes = {
    subHeader: PropTypes.string.isRequired
}

export default SubHeader