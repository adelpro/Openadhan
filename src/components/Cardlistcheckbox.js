import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import "../App.css";
import ToggleSwitch from "./ToggleSwitch";
import { FormGroup, ListItem } from "@mui/material";
export default function Cardlistcheckbox() {
  const [GeoBigdatacloud, setGeoBigdatacloud] = useState(
    localStorage.getItem("GeoBigdatacloud")
  );
  if (GeoBigdatacloud === null) {
    setGeoBigdatacloud(true);
  }
  const [GeoNominatim, setGeoNominatim] = useState(
    localStorage.getItem("GeoNominatim")
  );
  if (GeoNominatim === null) {
    setGeoNominatim(true);
  }
  return (
    <div className="card">
      <p>Cards</p>
      <ListItem>
        <ToggleSwitch
          checked={GeoBigdatacloud}
          id="GeoBigdatacloud-switch"
          label="GeoBigdatacloud API card"
          onChange={(e) => {
            localStorage.setItem("GeoBigdatacloud", `${e.target.checked}`);
            setGeoBigdatacloud(e.target.checked);
            console.log(e.target.checked);
          }}
        />
      </ListItem>
      <ListItem>
        <ToggleSwitch
          checked={GeoNominatim}
          id="GeoNominatim-switch-"
          label="GeoNominatim API card"
          onChange={(e) => {
            localStorage.setItem("GeoNominatim", `${e.target.checked}`);
            setGeoNominatim(e.target.checked);
            console.log(e.target.checked);
          }}
        />
      </ListItem>
    </div>
  );
}
