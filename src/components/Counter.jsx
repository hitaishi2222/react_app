import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="button mx-2 hover:bg-slate-500" onClick={decrement}>
        Decrement
      </button>
      <button className="button mx-2 hover:bg-slate-500" onClick={reset}>
        Reset
      </button>
      <button className="button mx-2 hover:bg-slate-500" onClick={increment}>
        Increment{" "}
      </button>
    </div>
  );
};

export default Counter;
