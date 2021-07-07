import React, { useState, useEffect } from "react";
import Quotes from "./Quotes";

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
    } else if (totalmilisec < 40) {
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
      <center>
        <div className="container my-4">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">
                  {streaktime ? streaktime : "Start Your Streak"}
                </h5>
                <h6 className="card-subtitle mb-2" style={{ color: "#ffff66" }}>
                  {myachivement ? (
                    <div>Current achivements:{myachivement}</div>
                  ) : (
                    <div></div>
                  )}
                </h6>
                <div className="mt-5">
                  <p
                    className="text-muted "
                    style={{ fontStyle: "italic", fontSize: "20px" }}
                  >
                    <Quotes />
                  </p>
                </div>
                <div style={{ position: "relative" }}>
                  {onoff ? (
                    <>
                      <button
                        className="btn btn-danger mt-4"
                        onClick={startTimer}
                      >
                        Reset Streak
                      </button>
                    </>
                  ) : (
                    <button
                      className="btn btn-primary mt-4"
                      style={{ position: "center" }}
                      onClick={startTimer}
                    >
                      Start
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
      <div class="wrapper">
        <a
          href="https://www.reddit.com/r/NoFap/top/?t=all"
          target="_blank"
          className="btn btn-sm"
        >
          Need Help?
        </a>
        <a
          href="https://www.yourbrainonporn.com/tools-for-change-recovery-from-porn-addiction/rebooting-advice-observations-from-successful-rebooters/a-complete-beginners-guide-to-nofap/"
          target="_blank"
          className="btn btn-sm mx-2"
        >
          Guide to No fap
        </a>
      </div>
    </>
  );
};

export default Timer;
