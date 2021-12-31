import { createContext, useEffect, useState } from "react";
import useGeolocation from "react-hook-geolocation";
export const GeoContext = createContext();
export function GeoProvider({ children }) {
  const autogeo = useGeolocation();
  const [geo, setgeo] = useState({ autogeo, mode: "auto" });

  useEffect(() => {
    const geocheck = localStorage.getItem("methode");
    if (geocheck === "manual") {
      setgeo({
        latitude: localStorage.getItem("latitude"),
        longitude: localStorage.getItem("longitude"),
        accuracy: "",
        mode: "manual",
      });
    }
  }, []);
  return (
    <div>
      <GeoContext.Provider value={[geo, setgeo]}>
        {children}
      </GeoContext.Provider>
    </div>
  );
}
