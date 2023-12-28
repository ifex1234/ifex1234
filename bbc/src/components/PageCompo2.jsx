
import PropTypes from 'prop-types'
import BoxThird from './BoxThird'

const PageCompo2 = ({myArrays, start, end}) => {
  return (
    <div className='flex flex-row w-[95%]'>
        {myArrays.slice(start, end).map((item) =>(
            <BoxThird key={item.id} image={item.image} title={item.title} content={item.content} category={item.zone}/>
        ))}
        
    </div>
  )
}

PageCompo2.propTypes = {
    myArrays: PropTypes.string,
    start: PropTypes.string,
    end : PropTypes.string
}

export default PageCompo2