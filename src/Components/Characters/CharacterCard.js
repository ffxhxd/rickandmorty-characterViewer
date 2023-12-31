import { Link } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = (props) => {
  const { name, status, species, image, origin, location, id } = props.info;

  return (
    <Link to={`/characterdetails/${id}`} className="charactercard-container">
      <div>
        <img src={image} alt="Character Avatars" />
      </div>
      <div className="charactercard-info">
        <h1>
          <span className="name-title truncate">{name}</span>
          <p className="font-bold">
            {status === "Dead" ? "💀" : "🟢"} {status} - {species}{" "}
          </p>
        </h1>
        <h1>
          Last known location:
          <p className="font-bold">{location.name}</p>
        </h1>
        <h1>
          First seen in:
          <p className="font-bold">{origin.name}</p>
        </h1>
      </div>
    </Link>
  );
};

export default CharacterCard;
