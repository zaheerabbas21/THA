import React from "react";
import "./Calorie.css";

function Calorie(props) {
  const { id, name, calorieValue, setCalories } = props;
  function handleDelete(id) {
    setCalories((prevState) => {
      let newList = prevState.filter((todo, idx) => idx !== id);
      return newList;
    });
  }

  return (
    <div className="calorie-card">
      <div className="calorie-header">
        <h1>{name}</h1>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      <h2>You have Consumed {calorieValue} cals today</h2>
    </div>
  );
}

export default Calorie;
