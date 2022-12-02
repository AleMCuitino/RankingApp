import styled from "styled-components";
import { bgDark, bgLight } from "../../variables/ColorVariables";

export const Header = styled.header`
  ${bgDark};
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  /* padding: 2vw 2vw; */
  align-items: center;
  margin-bottom: 4vw;

  .logo {
    width: 10vw;
    display: flex;
    align-items: center;
    
  }

  img {
    width: 80%;
  }
`;
