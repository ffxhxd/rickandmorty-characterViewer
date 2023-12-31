import React, { useState } from "react";
import useCharacters from "../../Utils/useCharacters";
import CharacterCard from "./CharacterCard";
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
    <>
      <div className="flex justify-center mt-10 p-4 gap-9 items-center">
        <button className="" onClick={handlePageDown}>
          <IoIosArrowBack size={40} />
        </button>
        <h1 className="text-3xl font-bold">{pageNumber}</h1>
        <button className="" onClick={handlePageUp}>
          <IoIosArrowForward size={40} />
        </button>
      </div>

      <div className="characters-container">
        {cards.map((curr) => (
          <CharacterCard key={curr.id} info={curr} />
        ))}
      </div>
    </>
  );
};

export default Characters;
