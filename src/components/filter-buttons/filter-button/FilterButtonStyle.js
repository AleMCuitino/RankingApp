import styled from "styled-components";
import { bgPrimary } from "../../../variables/ColorVariables";

export const FilterButtonStyled = styled.button`

border: none;
    padding: 0.2rem 4rem;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    height: 2rem;
    width: 7rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  &:focus{
    ${bgPrimary}
  }
`