import React, { useState, useEffect } from "react";

const Timer = ({
  onoff,
  setOnoff,
  startTimer,
  streaktime,
  totalmilisec,
  myachivement,
  setMyachivement,
  achivement,
}) => {
  const checkAchivement = () => {
    if (totalmilisec < 5) {
      setMyachivement(achivement[0]);
    } else if (totalmilisec < 10) {
      setMyachivement(achivement[1]);
    } else if (totalmilisec < 15) {
      setMyachivement(achivement[2]);
    } else if (totalmilisec < 20) {
      setMyachivement(achivement[3]);
    } else if (totalmilisec < 25) {
      setMyachivement(achivement[4]);
    } else if (totalmilisec < 30) {
      setMyachivement(achivement[5]);
    } else if (totalmilisec < 35) {
      setMyachivement(achivement[6]);
    } else if (totalmilisec < 45) {
      setMyachivement(achivement[7]);
    } else {
      setMyachivement(achivement[8]);
    }
  };

  useEffect(() => {
    checkAchivement();
  }, [streaktime]);
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

      <div>{myachivement}</div>
    </>
  );
};

export default Timer;
