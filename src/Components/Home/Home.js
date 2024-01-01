import React from "react";
import "./Home.scss";
import HomeCards from "./HomeCards";
import homeImg from "../../Assets/home.jpg";
import charactersImg from "../../Assets/characters.jpg";
import locationImg from "../../Assets/locaton.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container overflow-y-scroll no-scrollbar">
        <Link to="/characters">
          <HomeCards title="Characters" imageUrl={charactersImg} />
        </Link>
        <Link to="/episodes">
          <HomeCards title="Episodes" imageUrl={homeImg} />
        </Link>
        <Link to="/locations">
          <HomeCards title="Locations" imageUrl={locationImg} />
        </Link>
      </div>
    </>
  );
};

export default Home;
