import styled from "styled-components";
import { bgDark, bgLight } from "../../variables/ColorVariables";

export const Header = styled.header`
  ${bgDark};
  background-color: rgb(55, 55, 55);
  display: flex;
  flex-direction: row;
  -moz-box-pack: justify;
  justify-content: space-between;
  -moz-box-align: center;
  align-items: center;
  margin-bottom: 5vw;
  height: 3rem;

  .logo {
    display: flex;
    -moz-box-align: center;
    align-items: center;
  }

  img {
    height: 2rem;
    margin: 0.5rem;
  }
`;
