import React from "react";

function FilterTabs({ updateAppsList }) {
  return (
    <>
      <label>
        <input
          type="radio"
          name="filter"
          value="Mejores"
          onClick={(e) => updateAppsList(e.target.value)}
          defaultChecked={true}
        />
        Best
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="Intermedias"
          onClick={(e) => updateAppsList(e.target.value)}
        />
        Intermediate
      </label>
      <label>
        <input
          type="radio"
          name="filter"
          value="Peores"
          onClick={(e) => updateAppsList(e.target.value)}
        />
        Worst
      </label>
    </>
  );
}

export default FilterTabs;
