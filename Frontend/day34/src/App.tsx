import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducers";
import { addNote, deleteNote, clickedNote } from "./actions";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const [input, setInput] = useState<string>("");
  // const [clicked, setClicked] = useState<boolean>(false);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>TODO APPLICATION</h1>
      <div className="input">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          onClick={() => {
            dispatch(addNote(input));
            setInput("");
          }}
        >
          Add
        </button>
      </div>
      <div className="notes">
        {notes.length > 0 ? (
          <ul>
            {notes.map((note: string, index: number) => (
              <li key={index}>
                <h3
                  onClick={() => {
                    dispatch(clickedNote(index));
                  }}
                  // onClick={(index) => setClicked(!clicked)}
                  // className={clicked ? "clicked" : ""}
                >
                  {note}
                </h3>
                <button
                  onClick={() => {
                    dispatch(deleteNote(index));
                    setInput("");
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Add Your Daily Task 😄...</p>
        )}
      </div>
    </div>
  );
}

export default App;
