import React from "react";
import "./HomeCards.scss";

const HomeCards = (props) => {
  const { imageUrl, title } = props;
  return (
    <div
      className="homecards-container"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default HomeCards;
