import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Appliances from "./pages/appliances";
import BabyProducts from "./pages/babyProducts";
import Computing from "./pages/computing";
import Electronics from "./pages/electronics";
import Fashion from "./pages/fashion";
import Gaming from "./pages/gaming";
import Health from "./pages/health";
import HomeAndOffice from "./pages/homeAndOffice";
import Othercategory from "./pages/othercategory";
import Phones from "./pages/phones";
import Sporting from "./pages/sporting";
import Supermarket from "./pages/supermarket";
import { Form } from "./pages/form";
import { PayOrder } from "../src/pages/help/help"
import { ErrorPage } from "./pages/ErrorPage";
import Payments from "./pages/helpPage/payments";
import PlaceOrder from "./pages/help/PlaceOrder";
import PayforOrder from "./pages/helpPage/PayforOrder";
import TrackOrder from "./pages/helpPage/TrackOrder";
import CancelOrder from "./pages/helpPage/CancelOrder";
import CreateReturn from "./pages/helpPage/CreateReturn";
import Vouchers from "./pages/helpPage/Vouchers";
import Delivery from "./pages/helpPage/Delivery";
import Returns from "./pages/helpPage/Returns";
import Product from "./pages/helpPage/Product";
import Account from "./pages/helpPage/Account";
import JumiaExpress from "./pages/helpPage/JumiaExpress";
import SellJumia from "./pages/helpPage/SellJumia";
import JumiaGlobal from "./pages/helpPage/JumiaGlobal";
import JumiaStation from "./pages/helpPage/JumiaStation";


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="appliances" element={<Appliances/>}/>
      <Route path="babyProducts" element={<BabyProducts/>}/>
      <Route path="computing" element={<Computing/>}/>
      <Route path="electronics" element={<Electronics/>}/>
      <Route path="fashion" element={<Fashion/>}/>
      <Route path="gaming" element={<Gaming/>}/>
      <Route path="health" element={<Health/>}/>
      <Route path="homeandoffice" element={<HomeAndOffice/>}/>
      <Route path="othercategory" element={<Othercategory/>}/>
      <Route path="phones" element={<Phones/>}/>
      <Route path="sporting" element={<Sporting/>}/>
      <Route path="supermarket" element={<Supermarket/>}/>
      <Route path="form" element={<Form/>}/>
      <Route path="help" element= {<PayOrder/>}>
        <Route index element={<Payments/>} />
        <Route path="payments" element={<Payments/>} />
        <Route path="vouchers" element={<Vouchers/>} />
        <Route path="delivery" element={<Delivery/>} />
        <Route path="returns" element={<Returns/>} />
        <Route path="products" element={<Product/>} />
        <Route path="account" element={<Account/>} />
        <Route path="express" element={<JumiaExpress/>} />
        <Route path="selljumia" element={<SellJumia/>} />
        <Route path="jumiaGlobal" element={<JumiaGlobal/>} />
        <Route path="station" element={<JumiaStation/>} />
        
        <Route path="placeOrder" element={<PlaceOrder/>} />
        <Route path="payOrder" element={<PayforOrder/>} />
        <Route path="trackOrder" element={<TrackOrder/>} />
        <Route path="cancelOrder" element={<CancelOrder/>} />
        <Route path="createReturn" element={<CreateReturn/>} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App