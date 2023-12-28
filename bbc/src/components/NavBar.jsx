import "../index.css";
import { HiDotsHorizontal, HiOutlineSearch, HiOutlineViewList,  HiOutlineUser,  HiOutlineX}from 'react-icons/hi'
import bbcImage from "../assets/download.png"
const NavBar = () => {


  return (
    <div className="bg-black box-border h-16 w-screen">
      <div className=" flex flex-row justify-between w-full lg:w-11/12 h-full text-white items-center px-2 lg:ml-12">
        <span className="sm: order-2 md:order-none"><img width='70px' height="50px"src={bbcImage} alt="bbc logo"/></span>
        <span className="relative sm: order-1 md:order-none">
          <input className="w-12 lg:w-20 bg-black" type="text" />
          <i className="absolute bottom-0 left-1">
            < HiOutlineUser className="h-8 w-8"/>
          </i>
        </span>

        <nav className="hidden md:inline-block">Home</nav>
        <nav className="hidden md:inline-block">News</nav>
        <nav className="hidden md:inline-block">Sport</nav>
        <nav className="hidden md:inline-block">Earth</nav>
        <nav className="hidden lg:inline-block">Reel</nav>
        <nav className="hidden lg:inline-block">Worklife</nav>
        <nav className="hidden lg:inline-block">Travel</nav> 
        <nav className="hidden lg:inline-block">Culture</nav>
        <nav className="hidden md:inline-block">< HiDotsHorizontal/></nav>
        <nav className="md:hidden sm: order-3 md:order-none"><HiOutlineViewList className="h-24 w-10"/></nav>
        <nav className="lg:hidden sm: order-4 md:order-none"><HiOutlineSearch className="h-24 w-10"/></nav>
        
        <nav className="hidden lg:inline-block">
          <input type="text" />
        </nav>
      </div>
    </div>
  );
};


export const NavBar2 = () => {
  return (
    <div className="bg-black box-border h-16 w-screen hidden" >
      <div className=" flex flex-row justify-between w-full lg:w-11/12 h-full text-white items-center px-2 lg:ml-12 justify-between">
        <div className="flex flex-row text-white justify-between w-1/4">
            <nav className="lg:hidden">Reel</nav>
            <nav className="lg:hidden">Worklife</nav>
            <nav className="lg:hidden">Travel</nav>
            <nav className="lg:hidden">Culture</nav>
            <nav>Future</nav>
            <nav>TV</nav>
            <nav>Weather</nav>
            <nav>Sounds</nav>
        </div>
        <div>
            < HiOutlineX className="h-24 w-10"/>
        </div>
        </div>
    </div>
  )
}


export default NavBar;
