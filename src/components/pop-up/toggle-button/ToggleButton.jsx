import React from "react";
import { Label, Input, Switch, Span } from "./ToggleButtonStyle";

function ToggleButton(props) {
  return (
    <>
      
      <Label>
        <Input type="checkbox"/>
        <Switch/>
        <Span> {props.text} </Span>
      </Label>
     
    </>
  );
}

export default ToggleButton;
