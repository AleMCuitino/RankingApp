import React from "react";
import { FilterButtonStyled } from "./FilterButtonStyle";

function FilterButton({
  text,
  updateAppsList,
  value,
  name,
  filter,
  defaultChecked,
}) {
  return (
    <FilterButtonStyled
      onClick={(e) =>
        updateAppsList(e.target.value).setActiveButton(e.target.value)
      }
      defaultChecked={defaultChecked}
      value={value}
      name={name}
      filter={filter}
    >
      {text}
    </FilterButtonStyled>
  );
}

export default FilterButton;
