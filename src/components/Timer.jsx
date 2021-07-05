import React, { useState } from "react";

const Timer = ({ onoff, setOnoff, startTimer, streaktime }) => {
  const [achivement, setAchivement] = useState([
    "New Kid",
    "Cool Kid",
    "Firm believer",
    "Apprentice",
    "Resilient Bastard",
    "Master",
    "Grandmaster",
    "Transcendend Entity",
  ]);
  return (
    <>
      <div> {streaktime ? streaktime : "Start Your Streak"} </div>
      {onoff ? (
        <>
          <button className="btn btn-danger" onClick={startTimer}>
            Reset Streak
          </button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={startTimer}>
          Start
        </button>
      )}
    </>
  );
};

export default Timer;
