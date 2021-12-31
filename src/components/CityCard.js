import InputCity from "./InputCity";
import "../App.css";
import { Typography } from "@mui/material";
export default function CityCard() {
  const geocheck = localStorage.getItem("methode");
  return (
    <div className="card">
      {geocheck && (
        <Typography gutterBottom variant="h5" component="div">
          Location :(acctual mode: {geocheck})
        </Typography>
      )}
      {!geocheck && (
        <Typography gutterBottom variant="h5" component="div">
          Location :
        </Typography>
      )}
      <InputCity />
      <p>Search by city name (API nominatim)</p>
    </div>
  );
}
