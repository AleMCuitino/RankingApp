import React from 'react';
import { FilterButtonStyled } from './FilterButtonStyle';

function FilterButton(props) {
  return (
    <FilterButtonStyled>
      {props.text}
    </FilterButtonStyled>
  )
}

export default FilterButton