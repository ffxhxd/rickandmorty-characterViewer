import React from "react";
import bgImg from "../../Assets/rick-and-morty-portal-uhd-4k-wallpaper.jpg";
import Header from "../Header/Header";
import LocationCard from "./LocationCard";
import Loader from "../Loader/Loader";
import useLocationData from "../../Utils/useLocationData";

const Locations = () => {
  const data = useLocationData()?.results;

  if (!data) {
    return <Loader />;
  }

  return (
    <>
      <div
        className="bg-cover bg-center min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Header />

        <div className="overflow-x-scroll flex items-center gap-10 p-4 m-auto w-screen no-scrollbar">
          <div className="flex">
            {data.map((curr) => (
              <LocationCard key={curr.id} data={curr} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
