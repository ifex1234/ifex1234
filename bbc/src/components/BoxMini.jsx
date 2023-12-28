
import PropTypes from 'prop-types'

const BoxMini = ({image, content}) => {
  return (
    <div className='flex flex-col w-[96%] md:w-[33%] h-48 bg-black m-1'>
      <div className='w-full h-2/3'><img height='100%' width='100%' src={image} alt="" /></div>
      <div className='w-full h-1/3'><p>{content}</p></div>
    </div>
  )
}

BoxMini.propTypes = {
  content: PropTypes.string,
  image: PropTypes.string
}

export default BoxMini