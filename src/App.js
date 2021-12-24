import { useContext } from "react";
import "./App.css";
import "./components/Sidebar.css";
import Geo from "./components/Geo";
import { GeoContext } from "./context/GeoContext.js";
import PrayerTimes from "./components/PrayerTimes";
import GeoNominatim from "./components/GeoNominatim";
import CityCard from "./components/CityCard";
import Sidebar from "./components/Sidebar";
function App() {
  const [{ latitude, longitude, accuracy }, setgeo] = useContext(GeoContext);

  return (
    <div className="cards">
      {/* <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> */}
      <Geo lat={latitude} lon={longitude} acc={accuracy} />
      <GeoNominatim lat={latitude} lon={longitude} acc={accuracy} />
      <PrayerTimes lat={latitude} lon={latitude} />
      <CityCard />
    </div>
  );
}

export default App;
