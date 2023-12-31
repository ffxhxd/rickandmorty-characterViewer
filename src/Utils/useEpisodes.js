import { useEffect, useState } from "react";
import { EPISODES_API_URL } from "./Constants";

const useEpisodes = () => {
  const [episodesData, setEpisodesData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(EPISODES_API_URL);
      const json = await data.json();
      setEpisodesData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return episodesData;
};

export default useEpisodes;
