import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { removeItem } from "../actions/index";

import Edit from "./Edit.component";

const List = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {isEditing ? (
        <Edit index={index} setIsEditing={setIsEditing} />
      ) : (
        <div className="todolist__item">
          <h5 style={{ display: "inline-block" }}>{todo.title}</h5>
          <div className="buttons">
            <button
              onClick={() => {
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                dispatch(removeItem(index));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
