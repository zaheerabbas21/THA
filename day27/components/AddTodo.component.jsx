import React from "react";
import { useState } from "react";
import { addItem, clearList, loadTodo } from "../actions/index";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a todo ..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        onClick={() => {
          if (item !== "") {
            dispatch(
              addItem({
                title: item,
                done: false,
                editing: false,
              })
            );
          }
          setItem("");
        }}
      >
        Add
      </button>
      <button onClick={() => dispatch(clearList())}>Clear List</button>
      <div>
        <button
          style={{ marginTop: "1rem" }}
          onClick={() => dispatch(loadTodo())}
        >
          Load Todo
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
