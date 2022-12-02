import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-column-gap: 10px;
`;

export const Col = (col) => styled.div`
  display: flex;
  flex-direction: column;
  grid-column: auto;
  grid-column: span ${col};
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: auto;
  grid-column: span 2;
`;
