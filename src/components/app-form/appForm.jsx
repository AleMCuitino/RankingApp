import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (dataApp) => {
        console.log(dataApp)

    }

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>App name</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Dirección</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Edad</label>
                <input type="text" name="" />
            </div>
            <div>
                <label>Type</label>
                <select>
                    <option value="mob">Mobile</option>
                    <option value="desk">Desktop</option>
                    <option value="web">Web</option>
                </select>
            </div>
            <input type="submit" value="send" />
        </form>
    </div>
}

export default Form;