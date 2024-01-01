import { useEffect, useState } from "react";
import { SINGLE_CHARACTER_API_URL } from "./Constants";

const useSignleCharacter = (id) => {
  const [charactersData, setCharactersData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SINGLE_CHARACTER_API_URL + id);
      const json = await data.json();
      setCharactersData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return charactersData;
};

export default useSignleCharacter;
