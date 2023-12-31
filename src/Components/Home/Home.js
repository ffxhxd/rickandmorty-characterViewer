import React from "react";
import "./Home.scss";
import HomeCards from "./HomeCards";
import {
  CHARACTERS_IMAGE_URL,
  HOME_IMAGE_URL,
  LOCATION_IMAGE_URL,
} from "../../Utils/Constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/characters">
        <HomeCards title="Characters" imageUrl={CHARACTERS_IMAGE_URL} />
      </Link>
      <Link to="/episodes">
        <HomeCards title="Episodes" imageUrl={HOME_IMAGE_URL} />
      </Link>
      <Link to="/locations">
        <HomeCards title="Locations" imageUrl={LOCATION_IMAGE_URL} />
      </Link>
    </div>
  );
};

export default Home;
