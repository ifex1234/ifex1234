import adImage from "../assets/image/Choplife-brands-top-strip (1).gif"
import image1 from "../assets/image/categories/supermarket/2141250948926212239.jfif"
import "../styles/category.scss"

export const TopAds = () => {
  return (
    <div className="topad"><img src={adImage} alt="top adverts" /></div>
  )
}
export const CategoryAds = () => {
  return(
    <div className="adContainer">
      <div className="adContent"><img src={image1} alt="ads" /></div>
    </div>
  )
}