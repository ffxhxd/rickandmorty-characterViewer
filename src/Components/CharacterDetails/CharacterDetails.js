import React from "react";
import "./CharacterDetails.scss";
import useSignleCharacter from "../../Utils/useSingleCharacter";
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
    <div className="characterdetail-container">
      <div>
        <img src={image} alt="Character_Image" />
      </div>
      <div>
        <ul>
          <li>Name: {name} </li>
          <li>Species: {species}</li>
          <li>Gender: {gender}</li>
          <li>Status: {status}</li>
          <li>Location: {location.name}</li>
          <li>Origin: {origin.name}</li>
          <li>Created: {created}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
