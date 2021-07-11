import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const History = ({ myHistory }) => {
  return (
    <center>
      <div class="card">
        <h5 class="card-header">Your Past Scores</h5>
        <div class="card-body">
          <ul class="card-text">
            {myHistory.map((doc) => (
              <li>
                {doc.myachivement} : {doc.highScore}
              </li>
            ))}
          </ul>
          <Link to="/" class="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </center>
  );
};

export default History;
