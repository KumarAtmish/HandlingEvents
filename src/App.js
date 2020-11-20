import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("Click Me");

  const bgChange = () => {
    let newBg = "#34495e";
    setBg(newBg);
    setName("double Click Me");
  };
  const bgBack = () => {
    setBg(purple);
    setName("bebkuf");
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={bgChange} onDoubleClick={bgBack}>
        {name}
      </button>
    </div>
  );
}
