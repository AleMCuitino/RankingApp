import { useForm } from "react-hook-form";
import { React, useState, useEffect } from "react";
import {
  Container,
  ContainerForm,
  ContainerImgForm,
  ContainerNameAppForm,
  ContainerTypeAppForm,
  ContainerDataForm,

  ContainerAboutAppForm,
} from "./FormStyle";

import { App, Icon, TextContainer } from "../../components/card/CardStyle";
import { Rating } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
 

const Form = () => {
  const [coments, setComents] = useState(() => {
    const saveComents = window.localStorage.getItem("New Apps");
    if (saveComents) {
      return JSON.parse(saveComents);
    } else {
      return [];
    }
  });

  useEffect(() => {
    const savedapps = window.localStorage.setItem(
      "New Apps",
      JSON.stringify(coments)
    );
    console.log(savedapps);
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
  <Container>
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <ContainerImgForm>
          <input
            type="file"
            ref={register}
            name="app_icon"
            {...register("app_icon", { required: true })}
          />
        </ContainerImgForm>
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
            {...register("description", { required: true })}
          />
        </ContainerAboutAppForm>
        <input type="submit" value="cancel" />
        <input type="submit" value="send" />

        
        {coments.length === 0 ? (
          <p>No Coments yet</p>
        ) : (
          coments.map((app, index) => {
            return(

            <App key={index}>
              <Link to={`/${app.id}`}>
                <Icon src={app.app_icon} alt="descr" />
              </Link>
              <TextContainer>
                <span>
                  <b>{app.name}</b>
                </span>
                <span>{app.type}</span>
                <div className="star">
                  <AiFillStar style={{ color: "#2670E0" }} />
                  <span></span>
                </div>
              </TextContainer>
            </App>
            )
          })
        )}
    </ContainerForm>
    </Container>
  );
};

export default Form;
