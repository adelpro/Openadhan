import { useEffect, useState } from "react";
export const useAutoGeo = () => {
  const [autoGeo, setautoGeo] = useState({
    latitude: null,
    longitude: null,
    accuracy: null
  });
  const [autoGeoError, setautoGeoError] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords.latitude + " / " + pos.coords.longitude); // display VALUE
        const newUserPos = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        };
        setautoGeo(newUserPos); // store data in usestate
      },
      (err) => {
        console.log(err.message);
        setautoGeoError(err.message);
      },
      {}
    );
  }, []);
  return { autoGeo, autoGeoError };
};
