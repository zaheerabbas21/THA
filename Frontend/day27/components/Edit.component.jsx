import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { updateItem } from "../actions/index";

const Edit = ({ setIsEditing, index }) => {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState("");

  return (
    <div className="edit__component">
      <div className="edit__input__container">
        <input
          type="text"
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          if (newTitle.length > 0) {
            setIsEditing(false);
            dispatch(
              updateItem({
                index: index,
                nTitle: newTitle,
              })
            );
          }
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Edit;
