import CityCard from "../components/CityCard";
import "../App.css";
import Cardlistcheckbox from "../components/Cardlistcheckbox";
export default function Config() {
  return (
    <div className="cards">
      <CityCard />
      <Cardlistcheckbox />
    </div>
  );
}
