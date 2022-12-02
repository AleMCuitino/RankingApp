import React from "react";

function FilterButtons() {
  const buttonsArray = ["Best", "Inmtermediate", "Worst"];

  return (
    <div>
      {buttonsArray.map((button) => {
        return (
          <button
            key={Math.floor(Math.random() * 1000)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
}

export default FilterButtons;
