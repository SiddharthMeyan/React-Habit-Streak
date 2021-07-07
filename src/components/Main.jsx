import React from "react";

export const Main = ({
  setEmail,
  email,
  password,
  setPassword,
  isuser,
  setIsuser,
  SignUp,
  Login,
  errorMessage,
  setErrorMessage,
}) => {
  return (
    <div className="mt-5">
      <input
        type="text"
        placeholder="Enter Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        className="my-2"
        type="password"
        placeholder="Enter Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      {errorMessage && <span>{errorMessage}</span>}
      <div className="container">
        {isuser ? (
          <>
            <button className="btn btn-secondary" onClick={Login}>
              Login
            </button>
            <br />
            <h5>
              Need account ?
              <h6
                style={{ color: "#ffff66" }}
                onClick={() => {
                  setIsuser(!isuser);
                }}
              >
                Click here
              </h6>
            </h5>
          </>
        ) : (
          <>
            <button className="btn btn-primary" onClick={SignUp}>
              SignIn
            </button>
            <br />
            <h5>
              Already have an account ?{" "}
              <h6
                style={{ color: "#ffff66" }}
                onClick={() => setIsuser(!isuser)}
              >
                Login
              </h6>
            </h5>
          </>
        )}
      </div>
    </div>
  );
};
