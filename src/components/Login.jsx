import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="main">
      <div className="loginForm">
        <h2>Log in to Lokkerroom</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Link to="/homepage">
          {" "}
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
