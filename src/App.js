import { useState, useEffect } from "react";
import "./App.css";
import { fire, db, timestamp } from "./firebase/config";
import Timer from "./components/Timer";
import { Main } from "./components/Main";

function App() {
  const [onoff, setOnoff] = useState(false);
  const [originalTime, setOriginalTime] = useState(null);
  const [currenttime, setCurrenttime] = useState(null);
  const [streaktime, setStreaktime] = useState(null);
  const [totalmilisec, setTotalmilisec] = useState(null);
  const [myachivement, setMyachivement] = useState("");

  // for firebase
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isuser, setIsuser] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const achivement = [
    "👶🏻Noob",
    "👦🏻New Kid",
    "👲🏻Cool Kid",
    "🏄🏻‍♂️Firm believer",
    "👨🏻‍🎓Apprentice",
    "🏋🏻‍♂️Resilient Bastard",
    "🧙🏻Master",
    "🧙🏻‍♂️Grandmaster",
    "🦸🏻‍♂️Transcendend Entity",
  ];

  const startTimer = () => {
    if (onoff === true) {
      const endStreak = window.confirm("Give Up?");

      if (endStreak) {
        // const PrevScore = thingsRef
        //   .where("uid", "==", user.id)
        //   .onSnapshot(snap.docs.map(doc.data().highScore));
        const timeCreated = timestamp();
        const thingsRef = db.collection("History");
        thingsRef.add({
          uid: user.uid,
          highScore: streaktime,
          myachivement: myachivement,
          createdAt: timeCreated,
        });
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

  const SignUp = () => {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        var errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
    setEmail("");
    setErrorMessage("");
    setPassword("");
  };

  const Login = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        var errorMessage = error.message;
        setErrorMessage(errorMessage);
      });

    setEmail("");
    setErrorMessage("");
    setPassword("");
  };

  const Logout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
    if (user) {
      if (onoff === true) {
        let stTime = timeDiffCalc(currenttime, originalTime);
        setStreaktime(stTime);
      } else {
        setOriginalTime(null);
        setCurrenttime(null);
        setStreaktime(null);
        setMyachivement(null);
      }
    }
  }, [currenttime]);

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <>
            {/* <Timer Logout={Logout} user={user} /> */}
            <Timer
              Logout={Logout}
              user={user}
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
          </>
        ) : (
          <Main
            setEmail={setEmail}
            email={email}
            password={password}
            setPassword={setPassword}
            isuser={isuser}
            setIsuser={setIsuser}
            errorMessage={errorMessage}
            setErrorMessage={errorMessage}
            SignUp={SignUp}
            Login={Login}
          />
        )}
      </header>
    </div>
  );
}

export default App;
