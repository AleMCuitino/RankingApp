import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Icon } from "./SearchButtonStyle";
import PopUp from '../pop-up/PopUp';

function SearchButton() {
  const [stateModal1, changeStateModal1] = useState(false);
  return (
    <>
      <Button onClick={() => changeStateModal1(!stateModal1)}>
        <Icon/>
      </Button>
      <PopUp state={stateModal1} setState={changeStateModal1}/>
    </>
  );
}

export default SearchButton;
