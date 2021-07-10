import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Quotes from "./Quotes";

const Timer = ({
  onoff,
  getPrev,
  startTimer,
  streaktime,
  totalmilisec,
  myachivement,
  setMyachivement,
  achivement,
  Logout,
  user,
}) => {
  const checkAchivement = () => {
    if (totalmilisec < 5) {
      setMyachivement(achivement[0]);
    } else if (totalmilisec < 86400) {
      setMyachivement(achivement[1]);
    } else if (totalmilisec < 604800) {
      setMyachivement(achivement[2]);
    } else if (totalmilisec < 1209600) {
      setMyachivement(achivement[3]);
    } else if (totalmilisec < 2419200) {
      setMyachivement(achivement[4]);
    } else if (totalmilisec < 3628800) {
      setMyachivement(achivement[5]);
    } else if (totalmilisec < 6048000) {
      setMyachivement(achivement[6]);
    } else if (totalmilisec < 7257600) {
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
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h5 className="float-md-start mb-0" style={{ fontSize: "20px" }}>
              Welcome :<i> {user.email} </i>{" "}
              <Link
                to="/history"
                className="r-link link text-underlined"
                onClick={getPrev}
              >
                Previous Records
              </Link>
            </h5>
          </div>

          <main className="px-3">
            <div className="container">
              <button className="logout" onClick={Logout}>
                Logout
              </button>
            </div>
          </main>
        </header>
      </div>
      <div className="card text-center">
        <div className="card-header">
          <h5>{streaktime ? streaktime : "Start Your Streak"}</h5>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <h6 className="card-subtitle mb-2" style={{ color: "#ffff66" }}>
              {myachivement ? (
                <div>Current achivements:{myachivement}</div>
              ) : (
                <div></div>
              )}
            </h6>
          </h5>
          <p className="card-text">
            <p
              className="text-muted "
              style={{ fontStyle: "italic", fontSize: "20px" }}
            >
              <Quotes />
            </p>
          </p>

          {onoff ? (
            <>
              <button className="btn btn-danger" onClick={startTimer}>
                Reset Streak
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary "
              style={{ position: "center" }}
              onClick={startTimer}
            >
              Start
            </button>
          )}
        </div>
        <div className="card-footer text-muted">
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
      </div>
    </>
  );
};

export default Timer;
