import '../styles/sectionSmall.scss'
import '../styles/App.scss'
import PropTypes from 'prop-types'

export const SectionSmall = ({arrayItem}) => {
  return (
    <div className='storeContainer'>

      {arrayItem.map((item) => (
        <div key={item.id} className="store card">
          <img src={item.image} alt="" />
        </div> 
      ))}
      
      
    </div>
  )
}
 SectionSmall.propTypes = {
  arrayItem: PropTypes.array,
 }