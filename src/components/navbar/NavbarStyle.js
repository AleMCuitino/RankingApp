import styled from "styled-components";
import { bgDark, bgLight } from "../../variables/ColorVariables";

export const Header = styled.header`
  ${bgDark};
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  align-items: center;

  .logo {
    width: 5rem;
    display: flex;
    align-items: center;
  }

  img {
    width: 100%;
  }
`;
