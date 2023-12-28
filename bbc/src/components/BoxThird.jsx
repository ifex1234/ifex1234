import PropTypes from "prop-types";

const BoxThird = ({image, title, content, category,}) => {
  return (
    <div className="w-full md:w-[31%] lg:w-[30%] h-[70px] md:h-96 md:flex md:flex-col bg-gradient-to-r from-cyan-500 to-blue-500 m-2 text-white">
      <div className="hidden md:block w-full h-1/3   bg-auto" >
        <img height="100%" width="100%" src={image} alt="" className="bg-auto " />
      </div>
      <div className="w-full h-[30px] md:h-1/4 p-3">
        <h5>{title}</h5>
      </div>
      <div className="w-full h-[30px] md:h-1/4 hidden md:block p-3">
        <p>{content}</p>
      </div>
      <div className="w-full h-1/4 p-3 pl-3 text-xs">
        <p>{category}</p>
      </div>
    </div>
  );
};

BoxThird.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  category: PropTypes.string
};

export default BoxThird;
