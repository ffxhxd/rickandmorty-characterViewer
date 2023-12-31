import React from "react";
import CharacterDummyPics from "./CharacterDummyPics";

const EpisodeCard = (props) => {
  const { id, name, air_date, episode, created } = props.data;
  return (
    <div className="w-[400px] bg-black bg-opacity-80 text-white rounded-2xl shadow-lg mx-4 h-[500px] cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-slate-400  text-sm mb-2">
            Episode: {episode} - Air Date: {air_date}
          </p>
          <p className="text-slate-400  text-sm mb-2">ID: {id}</p>
          <p className="text-slate-400 text-sm">Created: {created}</p>
          <CharacterDummyPics />
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
