import React from "react";
import "./App.css";
import DataInput from "./features/inputs/input";
import DataOutput from "./features/outputs/output";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataInput />
        <DataOutput />
      </header>
    </div>
  );
}

export default App;
