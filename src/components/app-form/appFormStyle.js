import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const ContainerImgForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0vh 0vw 5vh 0vw;
    
`;

export const ImgForm = styled.div`
    padding: 0vh 0vw 5vh 0vw;
    background: #C2C3C6;
    border-radius: 12.5px;
    border-style: none;
    height: 20vh;
    width: 80vw;
`;

export const AddImg = styled.button`
    background-color: transparent;
    border: none;
    display:flex ;
    justify-content: flex-end;

`;

export const ContainerNameAppForm = styled.div`
padding: 0vh 0vw 5vh 0vw;
input {
        background: #C2C3C6;
        border-radius: 12.5px;
        border-style: none;
        height: 5vh;
        width: 80vw;
    }
`;

export const ContainerTypeAppForm = styled.div`
padding: 0vh 0vw 5vh 0vw;

`;

export const ContainerAboutAppForm = styled.div`
padding: 0vh 0vw 5vh 0vw;
input {
        background: #C2C3C6;
        border-radius: 12.5px;
        border-style: none;
        height: 25vh;
        width: 80vw;
    }
`;