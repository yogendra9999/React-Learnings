import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <h2>Status: {isOn ? "ON" : "OFF"}</h2>

      <button onClick={handleToggle}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default Toggle;