import styled from "styled-components";

export const MainContainer = styled.div`
display : flex ;
flex-direction: column;
align-items: center;
`

export const IconReturn = styled.div`
font-size: 6vw; 
position: absolute;
left: 5vw;
top: 10vw;

`

export const ContainerImgApp = styled.div`
display: flex;
justify-content: center;
width: 99vw;
gap: 0.2rem;

img{
    padding: 2rem 0rem 5rem 0rem;
    width: 20%;    
}
`
export const ContainerDataApp = styled.div`
/* padding: 0rem 1rem 0rem 0.5rem; */
display: flex;
justify-content: space-between;
align-content: flex-start;
width: 80vw;


img{
    height: 6rem;    
}
`
export const CoverSingle = styled.div`
padding: 0rem 0rem 0rem 0rem;
display: flex;
justify-content: space-between;
gap: 2vw;


.imgcoversingle{
    padding-top: 1.8vw;
    /* width: 5rem; */

    img{
        width: 15vw;
        height: auto;
    }
}

`

export const TitleDataApp = styled.div`
padding: 0rem 0rem 0rem 0rem;
font-size: 1.5vw;


`
export const IconEditApp = styled.div`
/* padding: 0rem 0rem 0rem 30rem; */
font-size: 2rem;
width: 5rem;
display: flex;
justify-content: space-between;
padding-top: 1.8vw;
`

export const ClasificationApp = styled.div`
display: flex;
align-items: center;
gap: 1vw;

`

export const ContainerInfoApp = styled.div`
padding: 5rem 10rem 5rem 10rem;
display: flex;
justify-content: center;
`
export const RatingInfoApp = styled.div`
padding: 0rem 2.5rem 0rem 0rem;
width: 35rem;
h3 {
    font-size: 1.5rem;
}
span{
    font-size: 2rem;
    font-weight:bolder;
    text-justify: center;
}
`
export const ContainerDataRanking = styled.div`

`

export const ContainerText = styled.p`
`

export const ContainerDataRankingLinear = styled.div`
padding: 2rem 0rem 5rem 0rem;
` 
