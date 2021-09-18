import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Home = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        <div className="header_option">
          <h1>Home</h1>
        </div>
      </Link>

      <Link to="/about" className="link">
        <div className="header_option">
          <h1>About</h1>
        </div>
      </Link>

      <Link to="/service" className="link">
        <div className="header_option">
          <h1>Service</h1>
        </div>
      </Link>

      <Link to="/contact" className="link">
        <div className="header_option">
          <h1>Contact</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
