import React, { useState, useEffect } from "react";

const Timer = ({ timeStamp }) => {
  const [seconds, setSeconds] = useState(timeStamp);
  const [isActive, setIsActive] = useState(true);

  function Pause() {
    console.log("paused");
    setIsActive(false);
  }
  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive || seconds === 0) {
      console.log("0000");
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div>{seconds}s</div>

      <button onClick={Pause}>Pause</button>
    </div>
  );
};

export default Timer;
