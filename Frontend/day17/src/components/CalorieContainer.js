import React from "react";
import "./CalorieContainer.css";
import FoodCard from "./FoodCard";

function CalorieContainer() {
  return (
    <div className="calorie-container">
      <h1 className="calorie-heading">Calories Read Only</h1>
      <div className="food-container">
        <FoodCard foodName="Pizza" calories={56} />
        <FoodCard foodName="Burgir" calories={56} />
        <FoodCard foodName="Pani Puri" calories={56} />
        <FoodCard foodName="Fried Rice" calories={56} />
        <FoodCard foodName="Lasagna" calories={56} />
      </div>
    </div>
  );
}

export default CalorieContainer;
