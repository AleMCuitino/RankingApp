import { useForm } from "react-hook-form";
import { React, useState, useEffect } from "react";
import {
  Container,
  ContainerForm,
  ContainerImgForm,
  ContainerDataForm,
  ContainerNameAppForm,
  ContainerTypeAppForm,
  ContainerAboutAppForm,
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
    handleSubmit,
  } = useForm();

  const onSubmit = (dataApp) => {
    console.log(dataApp);
    addComent(dataApp);
  };

  return (
  <Container>
    <form onSubmit={handleSubmit(onSubmit)}>
      <ContainerForm>
        <ContainerImgForm>
          <input
            type="file"
            ref={register}
            name="picture"
            {...register("picture", { required: true })}
          />
        </ContainerImgForm>
        <ContainerDataForm>
          <ContainerNameAppForm>
            <input
              type="text"
              placeholder="App name"
              name="name"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>App name is required</p>}
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
          </ContainerAboutAppForm>
          <input type="submit" value="cancel" />
          <input type="submit" value="send" />
        </ContainerDataForm>
      </ContainerForm>  
    </form>
  </Container>
);
};

export default Form;
