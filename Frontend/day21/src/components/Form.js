import React, { useState } from "react";
import ItemList from "./ItemList";

function Form(props) {
  const [food, setFood] = useState("");
  const [calorie, setCalorie] = useState(0);
  const { setItems } = props;
  function handleFood(event) {
    const { value } = event.target;
    setFood(value);
  }

  function handleCalorie(event) {
    const { value } = event.target;
    setCalorie(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setItems((prevState) => {
      const newItem = {
        id: prevState.length,
        title: food,
        calorieDetail: calorie
      };
      console.log(prevState);
      return [...prevState, newItem];
    });
    setFood("");
    setCalorie("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input">
        <input
          placeholder="Item Name"
          type="text"
          name="food"
          value={food}
          onChange={(e) => handleFood(e)}
        />
        <input
          placeholder="Calorie Amount"
          type="number"
          name="calorie"
          value={calorie}
          onChange={(e) => handleCalorie(e)}
        />
      </div>
      <input type="submit" value="Add Item" />
    </form>
  );
}

export default Form;
