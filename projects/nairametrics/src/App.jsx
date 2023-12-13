import NavBar from "./components/navBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./routes/home"
import "./App.css"
import Business from "./routes/business"
import Economy from "./routes/economy"
import Footer from "./components/footer"
import Exclusive from "./routes/exclusive"
import Financial from "./routes/financial"
import Industries from "./routes/industries"
import Lifestyle from "./routes/lifestyle"
import Markets from "./routes/markets"
import Opinions from "./routes/opinions"

function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="business" element={<Business/>}/>
     <Route path="economy" element={<Economy/>}/>
     <Route path="exclusive" element={<Exclusive/>}/>
     <Route path="financial" element={<Financial/>}/>
     <Route path="industries" element={<Industries/>}/>
     <Route path="lifestyle" element={<Lifestyle/>}/>
     <Route path="markets" element={<Markets/>}/>
     <Route path="opinions" element={<Opinions/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App