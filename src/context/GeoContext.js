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
    let isMounted = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newUserPos = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
          methode: "auto",
        };
        if (isMounted) {
          setgeoauto(newUserPos); // store data in usestate
          setgeoautoError(null);
        }
      },
      (err) => {
        if (isMounted) {
          console.log(err.message);
          setgeoautoError(err);
        }
      },
    );
    const meth = localStorage.getItem("methode");

    if (meth === "manual") {
      const newUserPos = {
        latitude: localStorage.getItem("latitude"),
        longitude: localStorage.getItem("longitude"),
        accuracy: localStorage.getItem("accuracy"),
      };
      if (isMounted) {
        setmet("manual");
        setgeomanual(newUserPos);
      }
    } else {
      if (isMounted) {
        setmet("auto");
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <GeoContext.Provider
        value={{
          geoauto,
          geoautoError,
          geomanual,
          met,
          setgeoauto,
          setgeomanual,
          setmet,
        }}
      >
        {children}
      </GeoContext.Provider>
    </div>
  );
}
