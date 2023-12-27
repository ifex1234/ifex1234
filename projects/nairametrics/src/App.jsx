import NavBar from "./components/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import "./App.css";
import Business from "./routes/business";
import Economy from "./routes/economy";
import Footer from "./components/footer";
import Exclusive from "./routes/exclusive";
import Financial from "./routes/financial";
import Industries from "./routes/industries";
import Lifestyle from "./routes/lifestyle";
import Markets from "./routes/markets";
import Opinions from "./routes/opinions";
import ErrorPage from "./routes/errorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="exclusive" element={<Exclusive />} />
          <Route path="markets" element={<Markets />} />
          <Route path="industries" element={<Industries />} />
          <Route path="economy" element={<Economy />} />
          <Route path="business" element={<Business />} />
          <Route path="financial" element={<Financial />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="opinions" element={<Opinions />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
