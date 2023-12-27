import PropTypes from 'prop-types'
import image1 from '../assets/image/carousel/Double_banner___572_x_250.png'
import image2 from '../assets/image/carousel/MFL__572x250-sneakers.png'
import '../styles/App.scss'
const HalfSlide = props => {
  return (
    <div className='half-container'>
        <div className='card'>
            <img src={image1} alt="" />
        </div>
        <div className=' card'>
            <img src={image2} alt="" />
        </div> 
    </div>
  )
}

HalfSlide.propTypes = {}

export default HalfSlide