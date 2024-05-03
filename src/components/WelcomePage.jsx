import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div className="main">
      <h1 className="appTitle">Welcome to Lokkerroom</h1>
      <h2 className="quoteTitle">Chat freely, express yourself, and make connections.</h2>
      <div className="inputButtonContainer">
        <Link to="/register">
          {" "}
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
