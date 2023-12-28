import BoxMini from "./BoxMini";
import BoxThird from "./BoxThird";
import { HiOutlineArrowRight } from "react-icons/hi";
import SideAds from "./sideAds";
import { Breaking_news } from "../assets/DATA/breaking";


export function Article2() {
  return (
    <div className="block lg:flex flex-row w-full lg:w-11/12 ml-1 lg:ml-8 ">
      
         <div className="w-full lg:w-3/4 px-2 hidden md:flex flex-row flex-wrap ">
      {Breaking_news.slice(0,9).map((items) =>(
         <BoxThird key={items.id} image={items.image} category={items.zone} content={items.content} />
      ))}
      
    </div>
    <div className="hidden lg:inline-block w-1/4 mt-2">
      <SideAds/>
    </div>
    </div>
 
  );
}

export const Article3 = () => {
  return (
    <div className="w-full px-4 my-2 h-auto flex flex-col gap-2 bg-green-600 text-white">
      <div className="flex flex-row justify-between w-full items-center mt-4">
        <div className="w-14 pl-2 border-2 border-green-700 font-medium">Earth</div>
        <div className="w-[100px]">
          <button className=" rounded-2xl w-[90px] h-6 p-2 justify-between flex flex-row items-center border-2 border-grey">
            Visit
            <span>
              <HiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
      <h5>Solution for a sustainable world</h5>
      <div className="w-full flex flex-col md:flex-row ">
      {Breaking_news.slice(0,3).map((items) =>(
         <BoxMini key={items.id} image={items.image} category={items.zone} content={items.content} />
      ))}
      </div>
    </div>
  );
};
