import { useForm } from "react-hook-form";
import  {React, useState, useEffect} from "react"
import {
  ContainerForm,
  ContainerImgForm,
  //ImgForm,
  AddImg,
  ContainerNameAppForm,
  ContainerTypeAppForm,
  ContainerAboutAppForm
} from "./AppFormStyle";







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
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerImgForm>
            <input 
              type="file" 
              ref={register}
              name="picture"
              {...register("picture", { required: true })}
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
            <label>Type</label>
            <select {...register("type", { required: true })}>
              <option value="mob">Mobile</option>
              <option value="desk">Desktop</option>
              <option value="web">Web</option>
            </select>
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
        </form>
      </ContainerForm>
  );
};

export default Form;
