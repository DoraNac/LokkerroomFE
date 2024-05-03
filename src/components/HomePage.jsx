import React from "react";
import "../style/HomePage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sidebar">
      <div className="logo">Lokkerroom</div>
       
        <div className="avatar"></div>
        <div className="options">Options</div>
        <div className="user-list"><h3>Chats</h3> <hr /></div>
      </div>
      <div className="main-content">
 
        <div className="chat-messages">
          <div className="message-container">
            <div className="message">Hello!</div>
            <div className="message">How are you?</div>
          </div>
        </div>
        <div className="message-input">
          <input type="text" placeholder="Type your message here" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
