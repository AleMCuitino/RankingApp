import { React, useState } from "react";
import { FormContainer, FormInput, Input } from "./ComentFormStyle";

function ComentForm({ onAddComent }) {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    onAddComent(name);
    setName('');
  }
  function onChangeName(event) {
    setName(event.target.value);
  }

  return (
    <FormContainer>
      <p>Add Coment</p>
      <form onSubmit={handleSubmit}>
        <FormInput Height="auto">
          {/* <label for="name">Name</label> */}
          <Input type="text" placeholder="Name" value={name} onChange={onChangeName}/>
        </FormInput>

        <FormInput Height="8rem">
          {/* <label for="email">Email</label> */}
          <Input
            type="text"
            name="coment"
            placeholder="Description"
            HeightInput="6rem"
          ></Input>
        </FormInput>
        <button>Send</button>
      </form>
    </FormContainer>
  );
}

export default ComentForm;
