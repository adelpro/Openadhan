import { useContext } from "react";
import "./App.css";
import Geo from "./components/Geo";
import { GeoContext } from "./context/GeoContext.js";
import PrayerTimes from "./components/PrayerTimes";
import GeoNominatim from "./components/GeoNominatim";
import CityCard from "./components/CityCard";
function App() {
  const { latitude, longitude, accuracy } = useContext(GeoContext);
  return (
    <div className="cards">
      <Geo lat={latitude} lon={longitude} acc={accuracy} />
      <GeoNominatim lat={latitude} lon={longitude} acc={accuracy} />
      <PrayerTimes lat={latitude} lon={latitude} />
      <CityCard />
    </div>
  );
}

export default App;
