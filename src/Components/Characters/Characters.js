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
  const [filterStatus, setFilterStatus] = useState(null);
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

  const handleAliveFilter = () => {
    setFilterStatus("Alive");
  };

  const handleDeadFilter = () => {
    setFilterStatus("Dead");
  };

  const handleClearFilter = () => {
    setFilterStatus(null);
  };

  if (!data) {
    return <Loader />;
  }

  const filteredCards = filterStatus
    ? cards.filter((character) => character.status === filterStatus)
    : cards;

  return (
    <div>
      <div className="characters-container h-screen no-scrollbar">
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
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleAliveFilter}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Alive
          </button>

          <button
            onClick={handleDeadFilter}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Dead
          </button>

          <button
            onClick={handleClearFilter}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear Filter
          </button>
        </div>
        <div className="w-full flex flex-wrap">
          {filteredCards.map((curr) => (
            <CharacterCard key={curr.id} info={curr} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
