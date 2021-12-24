import { createContext, useState } from "react";
import useGeolocation from "react-hook-geolocation";
export const GeoContext = createContext();
export function GeoProvider({ children }) {
  const [geo, setgeo] = useState(useGeolocation());
  const geocheck = localStorage.getItem("methode");
  if (geocheck === "manual") {
    setgeo({
      latitude: localStorage.getItem("latitude"),
      longitude: localStorage.getItem("longitude"),
      accuracy: "",
    });
  }
  return (
    <div>
      <GeoContext.Provider value={[geo, setgeo]}>
        {children}
      </GeoContext.Provider>
    </div>
  );
}
