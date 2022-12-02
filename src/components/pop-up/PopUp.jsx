import React from "react";
import ToggleButton from "./toggle-button/ToggleButton";

function PopUp() {
  return (
    <>
    <div>
    <ToggleButton text='10 Mejores'/>
    <ToggleButton text='10 Peores'/>
    </div>
    <div>
    <ToggleButton text='Móvil'/>
    <ToggleButton text='Web'/>
    <ToggleButton text='Escritorio'/>
    </div>
   
    </>
);
}

export default PopUp;
