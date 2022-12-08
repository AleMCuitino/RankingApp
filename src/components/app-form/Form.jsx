import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import {
  Title,
  Container,
  ContainerForm,
  ContainerImgForm,
  ContainerDataForm,
  ContainerNameAppForm,
  ContainerTypeAppForm,
  ContainerAboutAppForm,
  Buttons,
  ButtonSubmit,
  ButtonCancel,
} from "./FormStyle";

const Form = () => {
  const [coments, setComents] = useState(() => {
    const saveComents = window.localStorage.getItem("comentsData");
    if (saveComents) {
      return JSON.parse(saveComents);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("comentsData", JSON.stringify(coments));
  }, [coments]);

  const addComent = (coment) => {
    setComents([...coments, coment]);
  };

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onSubmit = (dataApp) => {
    console.log(dataApp);
    addComent(dataApp);
  };

  return (
  <div>
  <Title>Add an app to our page</Title>
  <Container>
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <ContainerImgForm>
          <input
            type="file"
            ref={register}
            name="picture"
            {...register("picture", { required: true })}
          />
          {errors.name?.type === "required" && <p>*App icon image is required</p>}
        </ContainerImgForm>
        <ContainerDataForm>
          <ContainerNameAppForm>
            <input
              type="text"
              placeholder="App name"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>*App name is required</p>}
          </ContainerNameAppForm>
          <ContainerTypeAppForm>
            <input type="checkbox" value="Mobile" {...register("type", { required: true })} />
            <label>Desktop</label>
            <input type="checkbox" value="Desktop" {...register("type", { required: true })} />
            <label>Web</label>
            <input type="checkbox" value="Web" {...register("type", { required: true })} />
            <label>Mobile</label>
          </ContainerTypeAppForm>
          <ContainerAboutAppForm>
            <input
              type="text"
              placeholder="About app"
              name="description"
              {...register("dirección", { required: true })}
            />
            {errors.name?.type === "required" && <p>*App description is required</p>}
          </ContainerAboutAppForm>
          <Buttons>
          <ButtonCancel>
            <Link to="/">
              <input type="submit" value="Cancel" />   
            </Link>
          </ButtonCancel> 
          <ButtonSubmit>
            <input type="submit" value="Add app" />
          </ButtonSubmit>
          </Buttons>
        </ContainerDataForm> 
    </ContainerForm>
  </Container>
  </div>  
);
};

export default Form;
