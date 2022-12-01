import React from "react";

function ButtonsList({ devices, filterDevice }) {
  return (
    <div>
      {devices.map((device) => (
        <button
          key={Math.random(1000000000000000 * 0.1)}
          onClick={() => filterDevice(device)}
        >
          {device}
        </button>
      ))}
    </div>
  );
}

export default ButtonsList;
