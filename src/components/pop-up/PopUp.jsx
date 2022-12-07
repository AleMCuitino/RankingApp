import React from "react";
import ToggleButton from "./toggle-button/ToggleButton";
import InputPopUp from "./input-popup/InputPopUp";
import {
  PopUpContainer,
  FiltersContainer,
  CloseButton,
  Overlay,
  Span,
  ToggleButtonsTops,
  ToggleButtonsType,
} from "./PopUpStyle";

function PopUp({state, setState}) {
  return (
    <>
    {state &&
    <Overlay>
      <PopUpContainer>
        <InputPopUp/>
        <CloseButton onClick={() => setState(false)}>X</CloseButton>
        <Span>Filters</Span>
        <FiltersContainer>
          <ToggleButtonsTops>
            <ToggleButton text="10 Top" />
            <ToggleButton text="10 Worst" />
          </ToggleButtonsTops>
          <ToggleButtonsType>
            <ToggleButton text="Mobile" />
            <ToggleButton text="Web" />
            <ToggleButton text="Desktop" />
          </ToggleButtonsType>
        </FiltersContainer>
      </PopUpContainer>
    </Overlay>
  }
  </>
  );
}

export default PopUp;
