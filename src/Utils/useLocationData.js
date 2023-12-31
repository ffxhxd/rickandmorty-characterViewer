import { useEffect, useState } from "react";
import { LOCATIONS_API_URL } from "./Constants";

const useLocationData = () => {
  const [locationData, setLocationsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(LOCATIONS_API_URL);
      const json = await data.json();
      setLocationsData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return locationData;
};

export default useLocationData;
