import { SectionSmall } from '../components/sectionsmall';
import SectionBig from '../components/sectionBig';
import { SectionBorderless } from '../components/sectionBorderless';
import { SectionMinor } from '../components/sectionMinor';
import { Sectionwithprice } from '../components/sectionwithprice';
import Slide from '../components/slide';
import StoreSlide from '../components/storeSlide';
import SubHeader from '../components/subHeader1';
import SubHeader2 from '../components/subHeader2';
import { productsData } from '../assets/data/section2';
import '../styles/App.scss'
import { PhoneDeals } from '../assets/data/deals';
import { deals1, MobileDeals, Otherdeals, Choplife, Gins, BestPrice } from '../assets/data/deals';
import { LightOn, Seller, StoreItems } from '../assets/data/other/store';
import HalfSlide from '../components/HalfSlide';
import { Note } from '../components/Note';
import { Contact } from '../components/contact';
import NavBar1 from '../components/navBar1';
import NavBar2 from '../components/navBar2';
import { TopAds } from '../components/TopAds';
import Footer from '../components/footer';

function Home() {
  return (
    <>
    <div className='home_container'>
      <TopAds/>
      <NavBar1/>
      <NavBar2/>
      <Contact/>
        <div className='Box'>
          
            <Slide/> 
            <SectionMinor/>
            <SubHeader item1={'Flash sales'} item2={'See all'} color={'sub_container bg-danger'}/>
            <SectionBig/>
            <SectionBorderless arrayItem={productsData} header={'Top Selling Items'}/>
            <SubHeader item1={'Choplife Christmas Deals'} item2={'See all'} color={'sub_container bg-warning'}/>
            <SectionBorderless arrayItem={Choplife}/>
            <HalfSlide/>
            <SubHeader item1={'Le drop Official Store Deals'} item2={'See all'} color={'sub_container bg-info'}/>
            <SectionBorderless arrayItem={Gins}/>  
            <SubHeader2 title={'Shop From Our Collections'} color={'sub_container2'}/>
            <Sectionwithprice arrayItem={deals1}/>
            <SubHeader item1={'Best Price'} item2={'See all'} color={'sub_container bg-info'}/>
            <SectionBorderless arrayItem={BestPrice}/> 
            <SubHeader2 title={'More Collections'} color={'sub_container2 bg-warning'}/>
            <Sectionwithprice arrayItem={Otherdeals}/>
            <SubHeader2 title={'Phone Deals'} color={'sub_container2 bg-warning'}/>
            <Sectionwithprice arrayItem={MobileDeals}/>
            <SubHeader item1={'Top Phone deals'} item2={'See all'} color={'sub_container bg-warning'}/>
             <SectionBorderless arrayItem={PhoneDeals}/>
            <SubHeader2 title={'Official store'} color={'sub_container2'}/>
            <SectionSmall arrayItem={StoreItems}/>
            <SubHeader item1={'Global Best Sellers'} item2={'See all'} color={'sub_container bg-primary'}/>
            <SectionBorderless arrayItem={Seller}/>
            <SubHeader2 title={'OFFICIAL STORE'} color={'sub_container2 bg-primary'}/>
            <StoreSlide/>
            <SubHeader2 title={'Keep the Lights On'} color={'sub_container2 bg-warning'}/>
            <Sectionwithprice arrayItem={LightOn}/>
            <Note/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home;