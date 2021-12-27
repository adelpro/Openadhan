import { Fragment, useContext } from "react";
import "./App.css";
import "./components/Sidebar.css";
import Geo from "./components/Geo";
import { GeoContext } from "./context/GeoContext.js";
import PrayerTimes from "./components/PrayerTimes";
import CityCard from "./components/CityCard";
import Header from "./components/Header";
import GeoNominatim from "./components/GeoNominatim";
function App() {
  const [{ latitude, longitude, accuracy }, setgeo] = useContext(GeoContext);

  return (
    <Fragment>
      <Header />
      <div className="cards">
        <Geo lat={latitude} lon={longitude} acc={accuracy} />
        <GeoNominatim lat={latitude} lon={longitude} acc={accuracy} />
        <PrayerTimes lat={latitude} lon={latitude} />
        <CityCard />
      </div>
    </Fragment>
  );
}

export default App;
