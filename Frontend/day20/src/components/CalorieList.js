import React, { useEffect, useState } from "react";
import Calorie from "./Calorie";

function CalorieList() {
  const [calorieList, setCalorieList] = useState([]);

  useEffect(() => {
    const newList = [
      {
        title: "Coke",
        value: 500
      },
      {
        title: "Browne",
        value: 180
      },
      {
        title: "Fried Rice",
        value: 200
      },
      {
        title: "Lasagna",
        value: 600
      },
      {
        title: "Pani Puri",
        value: 10
      }
    ];
    setCalorieList(newList);
  }, []);

  return (
    <div className="calorie-list">
      <h1 style={{ textAlign: "center" }}>Calorie Read Only</h1>
      {calorieList.map((calorie, idx) => {
        return (
          <Calorie
            key={idx}
            id={idx}
            name={calorie.title}
            calorieValue={calorie.value}
            setCalories={setCalorieList}
          />
        );
      })}
    </div>
  );
}

export default CalorieList;
