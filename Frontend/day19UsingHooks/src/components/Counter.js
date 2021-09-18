import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleCounter() {
    setCount((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className="counter">
      <button onClick={handleCounter}>{count}</button>
    </div>
  );
}

export default Counter;
