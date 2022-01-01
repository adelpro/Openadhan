import adhan from "adhan";
import Moment from "react-moment";
import "moment-timezone";
import "../App.css";
import logo from "../logo.svg";
export default function PrayerTimes(props) {
  // Get prayers times for "today" at lat: 43, long: -80 with -5 timezone
  let date = new Date();
  let coordinates = new adhan.Coordinates(props.lat, props.lon);
  let params = adhan.CalculationMethod.MuslimWorldLeague();
  params.madhab = adhan.Madhab.Hanafi;
  const prayerTimes = new adhan.PrayerTimes(coordinates, date, params);
  const qiblaDirection = adhan.Qibla(coordinates);
  //calculating time to next prayer
  /* let nextPrayerTime = prayerTimes.timeForPrayer(prayerTimes.nextPrayer()); */

  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <p>Source: "Adhan.js"</p>
      <ul className="mat_list" style={{ textAlign: "left" }}>
        <li>Qibla: {qiblaDirection}</li>
        <li>current / next</li>

        <li>
          fajr:
          <Moment format="HH:mm">{prayerTimes.fajr}</Moment>
        </li>
        <li>
          dhuhr:
          <Moment format="HH:mm">{prayerTimes.dhuhr}</Moment>
        </li>
        <li>
          asr:
          <Moment format="HH:mm">{prayerTimes.asr}</Moment>
        </li>
        <li>
          maghrib:
          <Moment format="HH:mm">{prayerTimes.maghrib}</Moment>
        </li>
        <li>
          isha:
          <Moment format="HH:mm">{prayerTimes.isha}</Moment>
        </li>
      </ul>
    </div>
  );
}
