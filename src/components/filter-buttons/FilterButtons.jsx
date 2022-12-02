import React from "react";
import FilterButton from "./filter-button/FilterButton";
import { FilterButtonsContainer } from "./FilterButtonsContainer";

function FilterButtons({ updateAppsList }) {
  return (
    <FilterButtonsContainer>
      <FilterButton state="pressed" updateAppsList={updateAppsList} text={"Mejores"} />
      <FilterButton
        state
        updateAppsList={updateAppsList}
        text={"Intermedias"}
      />
      <FilterButton state updateAppsList={updateAppsList} text={"Peores"} />
    </FilterButtonsContainer>
  );
}

export default FilterButtons;
