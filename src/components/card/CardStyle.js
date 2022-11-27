import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const App = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  width: 22rem;
  
`;

export const Icon = styled.img`
  width: 8rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
  /* filter: hue-rotate(20deg) brightness(200%); */
  filter: hue-rotate(180deg) brightness(70%);

  .star{
    display: flex;
    align-items: center;
    
    
  }
`;
