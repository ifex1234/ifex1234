import NavBar, { NavBar2 } from "../components/NavBar";
import Dater from "../components/Dater";
import { Article2, Article3 } from "../components/Articles";
import Weather from "../components/weather";
import { Breaking_news } from "../assets/DATA/breaking";
import { Component1, Component2, } from "../components/PageCompo";
import SubHeader from "../components/subHeader";
import Breaking from "../components/breaking";

function Home() {
  return (
    <div>
      <NavBar />
      <NavBar2 />
      <Dater />
      <Breaking />
      <Component1 myArray={Breaking_news} start={0} end={4} />
      <Component2 myArray={Breaking_news} start={0} end={3} header="News" />
        <Article2 />
      <Component2 myArray={Breaking_news} start={0} end={3} header="Sport" />
      <Component2
        myArray={Breaking_news}
        start={0}
        end={3}
        header="Most popular features of 2023"
      />
      <Weather />
      <Article3 />
      <SubHeader subHeader="Africa News" />
      <Component1 myArray={Breaking_news} start={0} end={1} />
      <SubHeader subHeader="Editors Picks" />
      <Component1 myArray={Breaking_news} start={0} end={4} />
    </div>
  );
}

export default Home;
