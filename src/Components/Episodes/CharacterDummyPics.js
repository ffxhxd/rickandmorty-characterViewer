import React from "react";
import { CHARACTERS_MOCK_IMAGES } from "../../Utils/Constants";

const CharacterDummyPics = () => {
  const data = CHARACTERS_MOCK_IMAGES;

  return (
    <div className="flex flex-wrap rounded-xl">
      {data.map((curr, index) => (
        <img
          className="w-20 rounded-full m-4 bg-white h-20 "
          src={curr}
          alt="images"
          key={index}
        />
      ))}
    </div>
  );
};

export default CharacterDummyPics;
