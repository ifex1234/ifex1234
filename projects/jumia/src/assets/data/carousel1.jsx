import PropTypes from 'prop-types'
import "../../styles/App.scss"

 const Carousel1 = ({text, image}) => {
   return (
     <div className='carouselContainer'>
        <div className='carouselContent'>
            <img src= {image}/>
        </div>
        <div>{text}</div>
     </div>
   )
 }

 export const Carousel2 = ({text, image}) => {
  return (
    <div className='carousel2Container'>
       <div className='carousel2Content'>
           <img src= {image}/>
       </div>
       <div>{text}</div>
    </div>
  )
}
 
 Carousel1.propTypes = {
    text: PropTypes.string,
    image: PropTypes.any
 }
 Carousel2.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any
}
 
 export default Carousel1