import styled from "styled-components";
import { bgDark} from "../../variables/ColorVariables";

export const FooterStyled = styled.footer`
  ${bgDark};
  display: flex;
  flex-direction: row;
  height: 3rem;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  align-items: center;

`;
