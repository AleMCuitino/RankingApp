import styled from "styled-components";
import { bgDark, bgLight } from "../../variables/ColorVariables";

export const Header = styled.header`
  ${bgDark};
  display: flex;
  flex-direction: row;
  height: 10vh;
  justify-content: space-between;
  /* padding: 2vw 2vw; */
  align-items: center;
  margin-bottom: 5vw;

  .logo {
    width: 15vw;
    display: flex;
    align-items: center;
    margin-left: 2.5vw;
    
  }

  img {
    width: 80%;
  }
`;

