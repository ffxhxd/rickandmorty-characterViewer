import { useEffect, useState } from "react";
import { CHARACTERS_API_URL } from "./Constants";

const useCharacters = (page) => {
  const [charactersData, setCharactersData] = useState(null);

  useEffect(() => {
    //debouncing
    const timer = setTimeout(() => fetchData(), 200);

    //clean up
    return () => {
      clearTimeout(timer);
    };
  }, [page]);

  const fetchData = async () => {
    try {
      //console.log("api called");
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
