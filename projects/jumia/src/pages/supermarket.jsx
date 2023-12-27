import { SectionBorderless } from "../components/sectionBorderless";
import SubHeader from "../components/subHeader1";
import { BestPrice } from "../assets/data/deals";
import { Sectionwithprice } from "../components/sectionwithprice";
import { CategoryAds, TopAds } from "../components/TopAds";
import NavBar1 from "../components/navBar1";
import NavBar_2 from "../components/navBar_2";
import "../styles/pages.scss"
import Bdcrumb from "../components/breadcrumb";
import { PageTitle } from "../components/pageTitle";
import Page from "./help/PAGE";
import { babyProduct } from "../assets/data/categories/supermaket";
import { boldCard } from "../assets/data/categories/supermaket";
import { groceries } from "../assets/data/categories/supermaket";
export default function Supermarket() {
  return (
    <div className="grocery-container">
      <div className="ads"><TopAds /></div>
       <NavBar1 />
        <NavBar_2 />
      <div className="grocery-main">
       
        <div className="mt-3"><Bdcrumb/></div>
        <CategoryAds/>
        <div><PageTitle title={'Grocery'}/></div>
        <SubHeader
          item1={"Best Price"}
          item2={"See all"}
          color={"sub_container bg-info"}
        />
        <SectionBorderless arrayItem={groceries} /> 
        <Sectionwithprice arrayItem={boldCard} />

        <SubHeader
          item1={"Kids and Baby Products"}
          item2={""}
          color={"sub_container bg-primary"}
        />
        <SectionBorderless arrayItem={babyProduct} />
      </div>

      <Page/> 
    </div>
  );
}
