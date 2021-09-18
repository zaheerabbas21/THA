import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="img-container">
        <img src="https://i.imgur.com/NMC0uK3.jpeg" alt="unsplash" />
      </div>
      <h3>Meme Image</h3>
    </div>
  );
}

export default Card;
