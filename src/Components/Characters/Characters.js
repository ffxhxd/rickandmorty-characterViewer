import React, { useState } from "react";
import useCharacters from "../../Utils/useCharacters";
import CharacterCard from "./CharacterCard";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Character.scss";

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const data = useCharacters(pageNumber);
  const cards = data?.results;

  const handlePageUp = () => {
    pageNumber < data?.info?.pages
      ? setPageNumber(pageNumber + 1)
      : setPageNumber(1);
  };
  const handlePageDown = () => {
    pageNumber > 1
      ? setPageNumber(pageNumber - 1)
      : setPageNumber(data?.info?.pages);
  };

  if (!data) {
    return <Loader />;
  }

  return (
    <div>
      <div className="characters-container no-scrollbar">
        <Header />
        <div className="flex justify-center p-4 gap-9 items-center sticky top-0 z-10 text-white">
          <button
            className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition duration-300"
            onClick={handlePageDown}
          >
            <IoIosArrowBack size={30} />
          </button>
          <h1 className="text-4xl font-bold">{pageNumber}</h1>
          <button
            className="bg-white text-black p-2 rounded-full hover:bg-gray-300 transition duration-300"
            onClick={handlePageUp}
          >
            <IoIosArrowForward size={30} />
          </button>
        </div>
        <div className="w-full flex flex-wrap">
          {cards.map((curr) => (
            <CharacterCard key={curr.id} info={curr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
