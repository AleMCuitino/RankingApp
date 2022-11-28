import React from "react";
import FilterButton from "./filter-button/FilterButton";
import { FilterButtonsContainer } from "./FilterButtonsContainer";

function FilterButtons() {
  return (
 
      <FilterButtonsContainer>
        <FilterButton text="Mejores"/>
        <FilterButton text="Intermedias"/>
        <FilterButton text="Peores"/>
      </FilterButtonsContainer>
      
  );
}

export default FilterButtons;
