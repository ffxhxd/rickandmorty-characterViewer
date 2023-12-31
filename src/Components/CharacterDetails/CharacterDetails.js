import React from "react";
import "./CharacterDetails.scss";
import useSignleCharacter from "../../Utils/useSingleCharacter";
import Header from "../Header/Header";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";

const CharacterDetails = () => {
  const { id } = useParams();
  const data = useSignleCharacter(id);

  if (!data) {
    return <Loader />;
  }

  const { name, gender, species, status, image, location, origin, created } =
    data;

  return (
    <>
      <div className="characterdetail-container">
        <Header />
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-80 p-2 sm:p-4 w-full sm:w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/2 mx-auto my-2 sm:my-4 lg:rounded-xl sm:rounded-[1px] shadow-md">
          <img
            className="w-16 h-16 sm:w-32 sm:h-32 rounded-full mb-2 sm:mb-4 border-2 border-white shadow-md"
            src={image}
            alt="Character_Image"
          />
          <div className="flex flex-wrap">
            <ul className="text-gray-200 p-2 sm:p-4 font-semibold text-sm sm:text-base rounded-xl space-y-2">
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Name:</span> {name}
              </li>
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Species:</span> {species}
              </li>
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Gender:</span> {gender}
              </li>
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Status:</span> {status}
              </li>
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Location:</span>{" "}
                <span className="truncate">{location.name}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Origin:</span>{" "}
                <span className="truncate">{origin.name}</span>
              </li>
              <li className="flex items-center">
                <span className="mr-1 text-slate-400">Created:</span> {created}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
