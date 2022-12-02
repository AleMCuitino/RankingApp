import React from "react";
import { FilterButtonStyled } from "./FilterButtonStyle";

function FilterButton({ text, updateAppsList, state }) {
  return (
    <FilterButtonStyled state onClick={() => updateAppsList(text)}>
      {text}
    </FilterButtonStyled>
  );
}

export default FilterButton;
