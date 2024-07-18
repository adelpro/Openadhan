import CityCard from "../components/CityCard";
import "../App.css";
import Footer from "../components/Footer";
import * as React from "react";
import Cardlistcheckbox from "../components/Cardlistcheckbox";
import Adhanconfig from "../components/Adhanconfig";
export default function Config() {
  return (
    <React.Fragment>
      <div className="cards">
        <Adhanconfig />
        <CityCard />
        <Cardlistcheckbox />
      </div>
      <Footer />
    </React.Fragment>
  );
}
