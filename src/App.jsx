import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Registration from "./components/Register";
import Login from "./components/Login";
import HomePage from "./components/HomePage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage/>} />
    
      </Routes>
    </Router>
  );
}

export default App;
