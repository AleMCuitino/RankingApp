import { useForm } from "react-hook-form";
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (dataApp) => {
    console.log(dataApp);
  };

  return (
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerImgForm>
            <input 
              type="file" 
              {...register("picture", { required: true })}
            />
            <AddImg>Add image</AddImg>
          </ContainerImgForm>
          <ContainerNameAppForm>
            <input
              type="text"
              placeholder="App name"
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
