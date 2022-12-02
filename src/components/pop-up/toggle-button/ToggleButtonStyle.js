import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const Switch = styled.div`
  width: 1.8rem;
  height: 0.8rem;
  background: #b3b3b3;
  border-radius: 32px;
  position: relative;
  padding: 0.2rem;
  transition: 300ms all;
  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 35px;
    top: 50%;
    left: 0.3rem; 
    background: white;
    transform: translate(0, -50%);

  }
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  display: none;
  &:checked + ${Switch} {
    background: green;
    &:before {
      transform: translate(0.7rem, -50%);
    }
  }
`;

export const Span = styled.span`
`
