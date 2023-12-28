import PropTypes from 'prop-types'

const BoxFull = ({title, category, content, img}) => {
  return (
    <div className='w-full md:w-[96%] lg:w-[49%] m-auto md:m-3 h-40 md:h-96 lg:h-[330px] bg-black text-white relative'>
        <img height='100%' width="100%" src={img} alt="" />
        <div className='flex flex-col w-full h-16 block px-3 my-2 absolute bottom-1 left-1'>
        <div className='font-bold text-sm h-1/3 my-1'>{title} kkkk</div>
        <div className='text-sm h-1/3 my-1 hidden md:block'>{content} kkkkhhhhhhh</div>
        <div className='h-1/3 w-2/3 mb-2 px-1 text-xs'>{category}lll</div>
    </div>
    </div>
      
  )
}

BoxFull.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    content: PropTypes.string,
    img: PropTypes.string
}

export default BoxFull