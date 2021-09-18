import React, { useState } from "react";
import "./Item.css";

function Item(props) {
  const { id, title, calorieDetail, setItems } = props;
  const [editable, setEditable] = useState(false);
  const [food, setFood] = useState("");
  const [calorie, setCalorie] = useState(0);

  function handleFood(e) {
    const { value } = e.target;
    setFood(value);
  }

  function handleCalorie(event) {
    const { value } = event.target;
    setCalorie(value);
  }

  function handleDelete(e) {
    console.log(e.target);
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== id);
      updatedItems.map((item, idx) => {
        return (item.id = idx);
      });
      return updatedItems;
    });
  }

  function handleDone(e) {
    setEditable(false);
    const newItem = {
      id: id,
      title: food,
      calorieDetail: calorie
    };
    setItems((prevItems) => {
      console.log("id", id);
      const updatedItems = prevItems.map((item) => {
        if (item.id === id) {
          return newItem;
        }
        return item;
      });
      return updatedItems;
    });
  }

  function handleEdit(e) {
    setEditable(true);
    setFood(title);
    setCalorie(calorieDetail);
  }

  return (
    <div className="card">
      {editable ? (
        <div>
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
      ) : (
        <div className="card-details">
          <h1>{title}</h1>
          <p>You have consumed {calorieDetail} calories</p>
        </div>
      )}
      <div className="btns">
        <button onClick={handleDelete} className="delete">
          Delete
        </button>
        {editable ? (
          <button onClick={handleDone} className="edit">
            Done
          </button>
        ) : (
          <button onClick={handleEdit} className="edit">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Item;
