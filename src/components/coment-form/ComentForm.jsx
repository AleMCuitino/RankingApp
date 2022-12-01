import React from "react";
import { FormContainer, FormInput, Input } from "./ComentFormStyle";

function ComentForm() {
  return (
    <FormContainer>
        <p>Add Coment</p>
      <FormInput>
        {/* <label for="name">Name</label> */}
        <Input type="text" name="name" placeholder="Name"></Input>
      </FormInput>

      <FormInput>
        {/* <label for="email">Email</label> */}
        <Input type="text" name="coment" placeholder="Description"></Input>
      </FormInput>
    </FormContainer>
  );
}

export default ComentForm;
