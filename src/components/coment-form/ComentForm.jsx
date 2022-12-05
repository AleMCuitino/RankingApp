import React from "react";
import { FormContainer, FormInput, Input } from "./ComentFormStyle";

function ComentForm({onAddComent}) {
  function handleSubmit(){
    onAddComent()
  }
  return (
    <FormContainer>
      <p>Add Coment</p>
      <FormInput Height="auto">
        {/* <label for="name">Name</label> */}
        <Input type="text" name="name" placeholder="Name"></Input>
      </FormInput>

      <FormInput Height="8rem" onSubmit={handleSubmit}>
        {/* <label for="email">Email</label> */}
        <Input
          type="text"
          name="coment"
          placeholder="Description"
          HeightInput="6rem"
        ></Input>
      </FormInput>
      <button>Send</button>
    </FormContainer>
  );
}

export default ComentForm;
