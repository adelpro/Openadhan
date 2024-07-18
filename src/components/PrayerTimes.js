import Moment from "react-moment";
import "moment-timezone";
import "../App.css";
import logo from "../assets/logo.svg";
import usePrayerTimes from "../hooks/usePrayerTimes";
export default function PrayerTimes({ lat, lon, language }) {
  const content = {
    English: {
      Qibla: "Qibla",
      prayerTimes: "Prayer times",
      current: "current",
      fajr: "fajr",
      dhuhr: "dhuhr",
      asr: "asr",
      maghrib: "maghrib",
      isha: "isha",
    },
    Arabic: {
      Qibla: "القبلة",
      prayerTimes: "أوقات الصلاة",
      current: "الصلاة الحالية",
      fajr: "الفجر",
      dhuhr: "الظهر",
      asr: "العصر",
      maghrib: "المغرب",
      isha: "العشاء",
    },
  };
  const { prayerTimes, current, qiblaDirection } = usePrayerTimes(lat, lon);
  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>{content[`${language}`][`prayerTimes`]}</h2>
      <p>Source: "AdhanJS"</p>
      <ul className="mat_list" style={{ textAlign: "left" }}>
        <li>
          {content[`${language}`][`Qibla`]}: {qiblaDirection}
        </li>
        <li>
          {content[`${language}`][`current`]}:
          {content[`${language}`][`${current}`]}
        </li>

        <li>
          {content[`${language}`][`fajr`]}:
          <Moment format="HH:mm">{prayerTimes.fajr}</Moment>
        </li>
        <li>
          {content[`${language}`][`dhuhr`]}:
          <Moment format="HH:mm">{prayerTimes.dhuhr}</Moment>
        </li>
        <li>
          {content[`${language}`][`asr`]}:
          <Moment format="HH:mm">{prayerTimes.asr}</Moment>
        </li>
        <li>
          {content[`${language}`][`maghrib`]}:
          <Moment format="HH:mm">{prayerTimes.maghrib}</Moment>
        </li>
        <li>
          {content[`${language}`][`isha`]}:
          <Moment format="HH:mm">{prayerTimes.isha}</Moment>
        </li>
      </ul>
    </div>
  );
}
