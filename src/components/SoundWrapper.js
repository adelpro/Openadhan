import { useEffect, useState } from "react";
import soundfile from "../assets/first_adhan_masjid_aadam.ogg";
import ReactMomentCountDown from "react-moment-countdown";
import moment from "moment";
export default function SoundWrapper({
  timer,
  showAdhanNotification,
  language,
}) {
  const content = {
    English: {
      after: "After",
    },
    Arabic: {
      after: "بعد",
    },
  };
  const [playing, setplaying] = useState(false);
  const [paused, setpaused] = useState(false);
  const [audio] = useState(new Audio(soundfile));
  const formatedTimer = moment(timer).format("YYYY-MM-DD HH:mm:ss");
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);
  useEffect(() => {
    audio.addEventListener("ended", () => setplaying(false));
    return () => {
      audio.removeEventListener("ended", () => setplaying(false));
    };
  }, [audio]);

  return (
    <div>
      {!playing && (
        <div>
          {content[`${language}`][`after`]}{" "}
          <ReactMomentCountDown
            toDate={formatedTimer}
            sourceFormatMask="YYYY-MM-DD HH:mm:ss"
            onCountdownEnd={() => {
              if (paused) {
                return null;
              }
              setplaying(true);
              showAdhanNotification();
              console.log("counter ok");
            }}
          />
        </div>
      )}
      {playing && (
        <div>
          <p>Adhan Now ...</p>
          <button
            onClick={() => {
              if (paused) {
                return null;
              }
              setpaused(true);
              setplaying(false);
            }}
          >
            Stop
          </button>
        </div>
      )}
    </div>
  );
}
