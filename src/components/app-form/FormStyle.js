import styled from "styled-components";
import { light, primary } from "../../variables/ColorVariables";

const media = {
    desktop: `@media(min-width: 900px)`,
};

export const Title = styled.h2`
    padding: 5vh 0vw 2.5vh 5vw;

`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

export const ContainerForm = styled.form`
    height: 90vh;
    width: 90vw;
    ${media.desktop} {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            gap: 5vw;
            width: 10vw;
        }
    p{
        color: ${primary};
    }    
`;

export const ContainerImgForm = styled.div`
    background: #C2C3C6;
    border-radius: 12.5px;
    margin: 0vh 0vw 5vh 0vw;
    height: 40vh;
    width: 80vw;
    ${media.desktop} {
        height: 40vh;
        width: 80vw;
    }    
`;

export const ContainerDataForm = styled.div`

`;

export const ContainerNameAppForm = styled.div`
padding: 0vh 0vw 5vh 0vw;
input {
        background: #C2C3C6;
        border-radius: 12.5px;
        border-style: none;
        height: 5vh;
        width: 80vw;
        ${media.desktop} {
            width: 40vw;
        }
    }
`;

export const ContainerTypeAppForm = styled.div`
padding: 0vh 0vw 5vh 0vw;
label {
    padding: 0vh 5vw 0vh 0vw;
    }

`;

export const ContainerAboutAppForm = styled.div`
padding: 0vh 0vw 5vh 0vw;
input {
        background: #C2C3C6;
        border-radius: 12.5px;
        border-style: none;
        height: 15vh;
        width: 80vw;
        ${media.desktop} {
            width: 40vw;
        }
    }
`;

export const Buttons = styled.div`
display: flex;
justify-content: space-evenly;
`;

export const ButtonCancel = styled.div`
input {
        background: transparent;
        border-radius: 25px;
        border-style:line;
        border-color: ${primary};
        outline: none;
        color: ${primary};
        font-size: 1rem;
        font-weight:500;
        height: 32px;
        width: 96px;
    }

`;

export const ButtonSubmit = styled.div`
input {
        background: ${primary};
        border-radius: 25px;
        border-style: none;
        color: ${light};
        font-size: 1rem;
        font-weight:500;
        height: 32px;
        width: 96px;
    }

`;