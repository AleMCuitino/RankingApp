import styled from "styled-components";

const media = {
    desktop: `@media(max-width: 900px)`,
};

export const Container = styled.div`
margin: 0;
padding-left: 2vw;
    display: flex;
    flex-direction: column ;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    .app{
        width: 6rem;
        height: 6rem;
    }
        
`;

export const ContainerForm = styled.form`
    /* height: 90vh;
    width: 90vw; */
    ${media.desktop} {
            /* display: flex;
            flex-direction: row-reverse;
            justify-content: space-around;
            gap: 5vw;
            width: 10vw; */
        }
`;

export const ContainerImgForm = styled.div`
    /* background: #C2C3C6; */
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