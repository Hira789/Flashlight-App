import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleFlashlight = () => {
    // Simulating control of flashlight state
    setIsOn((prev) => !prev);
    // Simulating permissions handling
    if (!isOn) {
      alert("Permission required to access flashlight!");
    }
  };

  return (
    <div className="container">
      <h1>Flashlight App</h1>
      <div
        className={`flashlight ${isOn ? "on" : "off"}`}
        onClick={toggleFlashlight}
      >
        <div className="bulb"></div>
      </div>
      <p>Click the flashlight to toggle it on and off.</p>
    </div>
  );
}
