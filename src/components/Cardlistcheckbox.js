import "../App.css";
import * as React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ListItem } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";
import logo from "../assets/logo.svg";
export default function Cardlistcheckbox() {
  const [GeoBigdatacloud, setGeoBigdatacloud] = useLocalStorage(
    "GeoBigdatacloud",
    "true"
  );
  const [GeoNominatim, setGeoNominatim] = useLocalStorage(
    "GeoNominatim",
    "true"
  );
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>Cards</h2>
      <ListItem>
        <ToggleSwitch
          checked={JSON.parse(GeoBigdatacloud)}
          id="GeoBigdatacloud-switch"
          label="GeoBigdatacloud API card"
          onChange={(e) => {
            setGeoBigdatacloud(JSON.stringify(e.target.checked));
          }}
        />
      </ListItem>
      <ListItem>
        <ToggleSwitch
          checked={JSON.parse(GeoNominatim)}
          id="GeoNominatim-switch"
          label="GeoNominatim API card"
          onChange={(e) => {
            setGeoNominatim(JSON.stringify(e.target.checked));
          }}
        />
      </ListItem>
    </div>
  );
}
