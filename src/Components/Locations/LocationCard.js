import React from "react";

const EpisodeCard = (props) => {
  const { id, name, type, dimension } = props.data;
  console.log(props.data);
  return (
    <div className="w-[400px] bg-black bg-opacity-80 text-white rounded shadow-lg mx-4 cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-slate-400  text-sm mb-2">Type: {type}</p>
          <p className="text-slate-400  text-sm mb-2">Dimension: {dimension}</p>
          <p className="text-slate-400  text-sm mb-2">ID: {id}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
