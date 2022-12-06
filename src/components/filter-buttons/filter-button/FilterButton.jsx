import React from "react";
import { FilterButtonStyled } from "./FilterButtonStyle";

function FilterButton({ text, updateAppsList }) {
  return (
    <FilterButtonStyled onClick={() => updateAppsList(text)}>
      {text}
    </FilterButtonStyled>
  );
}

export default FilterButton;
