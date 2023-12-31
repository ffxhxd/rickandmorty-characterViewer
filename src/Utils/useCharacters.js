import { useEffect, useState } from "react";
import { CHARACTERS_API_URL } from "./Constants";

const useCharacters = (page) => {
  const [charactersData, setCharactersData] = useState(null);

  useEffect(() => {
    fetchData(page);
    // console.log("useEffectCalled");
  }, [page]);

  const fetchData = async (page) => {
    try {
      const data = await fetch(CHARACTERS_API_URL + page);
      const json = await data.json();
      setCharactersData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return charactersData;
};

export default useCharacters;
