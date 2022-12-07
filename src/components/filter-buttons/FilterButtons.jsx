import React from "react";
import FilterButton from "./filter-button/FilterButton";
import { FilterButtonsContainer } from "./FilterButtonsContainer";

function FilterButtons({ updateAppsList }) {
  return (
    <FilterButtonsContainer>
      <FilterButton
        updateAppsList={updateAppsList}
        text={"Best"}
        value="Mejores"
        name="filter"
      />
      <FilterButton
        updateAppsList={updateAppsList}
        text={"Intermediate"}
        value="Intermedias"
        name="filter"
      />
      <FilterButton
        updateAppsList={updateAppsList}
        text={"Worst"}
        value="Peores"
        name="filter"
      />
    </FilterButtonsContainer>
  );
}

export default FilterButtons;
