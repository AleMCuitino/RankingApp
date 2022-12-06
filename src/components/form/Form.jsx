import React, { useState } from "react";
import TextField from '@mui/material/TextField'
//import { ContainerForm, ImgField } from '../form/FormStyle'

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          id="filled-required"
          label="Required"
          type={"text"}
          sx={{ margin:3}}
          placeholder="Name"
          variant="filled"
        />
        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          id="filled-required"
          label="Required"
          type={"email"}
          sx={{ margin:3}}
          placeholder="Name"
          variant="filled"
        />
        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}
          id="filled-required"
          label="Required"
          type={"passwoed"}
          sx={{ margin:3}}
          placeholder="Name"
          variant="filled"
        />
        <button type='submit'>Submit</button>
      </Form>    
    </> 
  );
}

export default Form;
