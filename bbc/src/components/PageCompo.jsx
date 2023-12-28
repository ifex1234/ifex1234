import BoxHalf from "./BoxHalf";
import PropTypes from "prop-types";

export const Component1 = ({ myArray, start, end }) => {
  return (
    <div className="w-11/12 h-auto md:hidden">
      {myArray.slice(start, end).map((content) => (
        <BoxHalf
          key={content.id}
          title={content.title}
          category={content.zone}
        />
      ))}
    </div>
  );
};

Component1.propTypes = {
  myArray: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
};
export const Component2 = ({ myArray, start, end, header }) => {
  return (
    <div className="w-full h-auto flex flex-col border-2  border-t-gray-500 md:hidden">
      <div className="w-full h-4 px-5 my-3">{header}</div>
      <div className="w-full h-auto">
        {myArray.slice(start, end).map((content) => (
          <BoxHalf key={content.id} title={content.title} zone={content.zone} />
        ))}
      </div>
    </div>
  );
};
Component2.propTypes = {
  myArray: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
};


