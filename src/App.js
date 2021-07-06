import { useState, useEffect } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
  const [onoff, setOnoff] = useState(false);
  const [originalTime, setOriginalTime] = useState(null);
  const [currenttime, setCurrenttime] = useState(null);
  const [streaktime, setStreaktime] = useState(null);
  const [totalmilisec, setTotalmilisec] = useState(null);
  const [myachivement, setMyachivement] = useState("");

  const achivement = [
    "Noob",
    "New Kid",
    "Cool Kid",
    "Firm believer",
    "Apprentice",
    "Resilient Bastard",
    "Master",
    "Grandmaster",
    "Transcendend Entity",
  ];

  const startTimer = () => {
    if (onoff === true) {
      const endStreak = window.confirm("Give Up?");

      if (endStreak) {
        setOnoff(!onoff);
      }
    } else {
      let i = new Date();
      setOriginalTime(i);
      setInterval(() => {
        let ctime = new Date();
        setCurrenttime(ctime);
      }, 1000);

      setOnoff(!onoff);
    }
  };

  useEffect(() => {
    if (onoff === true) {
      let stTime = timeDiffCalc(currenttime, originalTime);
      setStreaktime(stTime);
      // console.log(streaktime);
    } else {
      setOriginalTime(null);
      setCurrenttime(null);
      setStreaktime(null);
      setMyachivement(null);
    }
  }, [currenttime]);

  const timeDiffCalc = (dateFuture, dateNow) => {
    var delta = Math.abs(dateFuture - dateNow) / 1000;
    setTotalmilisec(delta);

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = Math.floor(delta % 60);
    // return seconds;
    let difference = "";
    if (days > 0) {
      difference += days === 1 ? `${days} day, ` : `${days} days, `;
    }

    difference +=
      hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `;

    difference +=
      minutes === 0 || hours === 1
        ? `${minutes} minutes `
        : `${minutes} minutes `;

    difference +=
      seconds === 0 || minutes === 1
        ? `${seconds} seconds `
        : `${seconds} seconds `;

    return difference;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Timer
          onoff={onoff}
          setOnoff={setOnoff}
          startTimer={startTimer}
          streaktime={streaktime}
          currenttime={currenttime}
          totalmilisec={totalmilisec}
          myachivement={myachivement}
          setMyachivement={setMyachivement}
          achivement={achivement}
        />
      </header>
    </div>
  );
}

export default App;
