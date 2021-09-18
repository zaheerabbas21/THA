import React from "react";
import "./FoodCard.css";

function FoodCard(props) {
  const { foodName, calories } = props;
  return (
    <div className="food-card">
      <h2>{foodName}</h2>
      <p>You have consumed {calories} cals today</p>
    </div>
  );
}

export default FoodCard;
