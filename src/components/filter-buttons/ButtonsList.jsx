import React from "react";

function ButtonsList({ appTypes, filterAppType }) {
  return (
    <div>
      {appTypes.map((appType) => (
        <button
          key={Math.random(1000000000000000 * 0.1)}
          onClick={() => filterAppType(appType)}
        >
          {appType}
        </button>
      ))}
    </div>
  );
}

export default ButtonsList;
