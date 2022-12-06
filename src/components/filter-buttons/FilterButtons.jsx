import React from "react";
import FilterButton from "./filter-button/FilterButton";
import { FilterButtonsContainer } from "./FilterButtonsContainer";

function FilterButtons({ updateAppsList }) {
  return (
    <FilterButtonsContainer>
      <FilterButton updateAppsList={updateAppsList} text={"Mejores"} />
      <FilterButton updateAppsList={updateAppsList} text={"Intermedias"} />
      <FilterButton updateAppsList={updateAppsList} text={"Peores"} />
    </FilterButtonsContainer>
  );
}

export default FilterButtons;
