import "../App.css";
import * as React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { ListItem } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";
import logo from "../assets/logo.svg";
import { AdhanParamContext } from "../context/AdhanParamContext";
export default function Cardlistcheckbox() {
  const [GeoBigdatacloud, setGeoBigdatacloud] = useLocalStorage(
    "GeoBigdatacloud",
    "true"
  );
  const [GeoNominatim, setGeoNominatim] = useLocalStorage(
    "GeoNominatim",
    "true"
  );
  const { lan: language } = React.useContext(AdhanParamContext);
  const content = {
    English: {
      title: "Cards",
      GeoBigdatacloud: "GeoBigdatacloud API card",
      GeoNominatim: "GeoNominatim API card",
    },
    Arabic: {
      title: "البطاقات",
      GeoBigdatacloud: "GeoBigdatacloud API بطاقة",
      GeoNominatim: "GeoNominatim API بطاقة",
    },
  };
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>{content[`${language}`][`title`]}</h2>
      <ListItem>
        <ToggleSwitch
          checked={JSON.parse(GeoBigdatacloud)}
          id="GeoBigdatacloud-switch"
          label={content[`${language}`][`GeoBigdatacloud`]}
          onChange={(e) => {
            setGeoBigdatacloud(JSON.stringify(e.target.checked));
          }}
        />
      </ListItem>
      <ListItem>
        <ToggleSwitch
          checked={JSON.parse(GeoNominatim)}
          id="GeoNominatim-switch"
          label={content[`${language}`][`GeoNominatim`]}
          onChange={(e) => {
            setGeoNominatim(JSON.stringify(e.target.checked));
          }}
        />
      </ListItem>
    </div>
  );
}
