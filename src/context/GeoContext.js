import { createContext, useEffect, useState } from "react";
export const GeoContext = createContext({});
GeoContext.displayName = "Geocontext";
export function GeoProvider({ children }) {
  const [met, setmet] = useState(null);
  const [geomanual, setgeomanual] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
  });
  const [geoauto, setgeoauto] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
  });
  const [geoautoError, setgeoautoError] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(pos.coords.latitude + " / " + pos.coords.longitude); // display VALUE
        const newUserPos = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          methode: "auto",
        };
        setgeoauto(newUserPos); // store data in usestate
        setgeoautoError(null);
      },
      (err) => {
        console.log(err.message);
        setgeoautoError(err);
      },
      {}
    );
    const meth = localStorage.getItem("methode");

    if (meth === "manual") {
      setmet(meth);
      const newUserPos = {
        latitude: localStorage.getItem("latitude"),
        longitude: localStorage.getItem("longitude"),
        accuracy: localStorage.getItem("accuracy"),
      };
      setgeomanual(newUserPos);
    } else {
      setmet("auto");
    }
  }, []);

  return (
    <div>
      <GeoContext.Provider
        value={[
          geoauto,
          geoautoError,
          geomanual,
          met,
          setgeoauto,
          setgeomanual,
          setmet,
        ]}
      >
        {children}
      </GeoContext.Provider>
    </div>
  );
}
