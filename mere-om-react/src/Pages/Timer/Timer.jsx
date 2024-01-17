import React from "react";
import { useState, useEffect } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let timerId;

    if (running) {
      timerId = setTimeout(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [count, running]);

  const handleCount = () => {
    setCount(0);
  };

  const handleToggle = () => {
    setRunning((prevRunning) => !prevRunning);
  };

  return (
    <div>
      <h1>hej Timer:{count}</h1>
      <button onClick={handleToggle}>{running ? "Pause" : "Resume"}</button>
      <button onClick={handleCount}>reset</button>
    </div>
  );
};
