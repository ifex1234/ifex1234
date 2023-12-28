const Weather = () => {
  return (
    <div className="flex flex-col bg-inherit w-full p-4 text-gray h-24 md:h-56 gap-4" >
      <div className="h-1/4 w-full">Lagos weather </div> 
      <div className="flex flex-row justify-around md:justify-start w-full gap-3 h-2/3">
        <div className="flex flex-row h-full w-2/4 md:w-1/4 justify-between">
          <span>icon</span>
          <span>today</span>
        </div>
        <div className="flex flex-row h-full w-1/3 md:w-1/4 justify-between">
          <span>icon</span>
          <span>day1</span>
        </div>
        <div className="hidden md:inline-block w-1/4">
          <span>icon</span>
          <span>day2</span>
        </div>
        <div className="hidden md:inline-block w-1/4">
          <span>icon</span>
          <span>day3</span>
        </div>
      </div>
    </div>
  );
};

export default Weather;
