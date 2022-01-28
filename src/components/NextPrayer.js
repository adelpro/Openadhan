import Moment from "react-moment";
import usePrayerTimes from "../hooks/usePrayerTimes";
import SoundWrapper from "./SoundWrapper";
import logo from "../assets/logo.svg";
import "../App.css";

export default function NextPrayer({
  language,
  latitude,
  longitude,
  showAdhanNotification,
}) {
  const content = {
    English: {
      NextPrayer: "Next prayer",
      fajr: "Fajr",
      dhuhr: "Dhuhr",
      asr: "Asr",
      maghrib: "Maghrib",
      isha: "Isha",
    },
    Arabic: {
      NextPrayer: "الصلاة القادمة",
      fajr: "الفجر",
      dhuhr: "الظهر",
      asr: "العصر",
      maghrib: "المغرب",
      isha: "العشاء",
    },
  };

  //prayertimes
  const { next, nextTimer } = usePrayerTimes(latitude, longitude);
  if (!nextTimer) {
    return <p>Error loading Next prayer timer</p>;
  }

  return (
    <div className="card">
      <img src={logo} alt="logo" />
      <h2>{content[`${language}`][`NextPrayer`]}</h2>
      <p>Source: "AdhanJS"</p>
      <ul className="mat_list" style={{ textAlign: "center" }}>
        <li>
          <strong>{content[`${language}`][`${next}`]}</strong> {" - "}
          <Moment format="HH:mm">{nextTimer}</Moment>
        </li>
        <li>
          <SoundWrapper
            language={language}
            timer={nextTimer}
            showAdhanNotification={showAdhanNotification}
          />
        </li>
      </ul>
    </div>
  );
}
