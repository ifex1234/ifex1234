import PropTypes from "prop-types";

const BoxHalf = ({ title, category, image }) => {
  return (
    <div className="w-full md:w-[48.5%] lg:w-[47.5%] h-16 md:h-[160px] m-1 relative">
      <div className="w-[98%] h-[98%] bg-white text-white m-1 hidden md:inline-block">
        <img height='99%' width='100%' src={image} alt="" />
      </div>
      <div className="flex flex-col w-full h-16 block px-3 my-2 md:absolute md:bottom-1 md:left-1 text-black">
        <div className="font-bold text-sm h-2/3 my-1 text-white">{title}</div>
        <div className="h-1/3 w-2/3 mb-2 px-1 text-xs text-white">{category}</div>
      </div>
    </div>
  );
};

BoxHalf.propTypes = {
    title: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string
};

export default BoxHalf;
