import { createContext } from "react";
import useGeolocation from "react-hook-geolocation";
export const GeoContext = createContext();
export function GeoProvider({ children }) {
  const geo = useGeolocation();
  return (
    <div>
      <GeoContext.Provider value={geo}>{children}</GeoContext.Provider>
    </div>
  );
}
