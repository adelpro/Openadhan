import Geo from "../components/Geo";
import { GeoContext } from "../context/GeoContext.js";
import PrayerTimes from "../components/PrayerTimes";
import CityCard from "../components/CityCard";
import GeoNominatim from "../components/GeoNominatim";
import { useContext } from "react";
import classes from "./Home.module.css";
export default function Home() {
  const [{ latitude, longitude, accuracy }] = useContext(GeoContext);
  return (
    <div className={classes.cards}>
      <CityCard />
      <Geo lat={latitude} lon={longitude} acc={accuracy} />
      <GeoNominatim lat={latitude} lon={longitude} acc={accuracy} />
      <PrayerTimes lat={latitude} lon={latitude} />
    </div>
  );
}
