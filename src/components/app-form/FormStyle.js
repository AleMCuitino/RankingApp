import styled from "styled-components";

const media = {
    desktop: `@media(min-width: 900px)`,
};

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const ContainerForm = styled.div`
    ${media.desktop} {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            gap: 5vw;
            width: 10vw;
        }
`;

export const ContainerImgForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0vh 0vw 5vh 0vw;
    input {
        background: #C2C3C6;
        border-radius: 12.5px;
        border-style: none;
        height: 25vh;
        width: 80vw;
        ${media.desktop} {
            height: 50vh;
            width: 30vw;
        }
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