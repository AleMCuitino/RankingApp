import React from "react";
import { Container, Row, Col } from "../../layout/components/GridSystem";

const GridSystemTrial = () => {
  return (
    <Container>
      <Row>
        <Col>
          <label>
            Hola
            <input type="text" placeholder="Hola" />
          </label>
          <label>
            Hola
            <input type="text" placeholder="Hola" />
          </label>
          <label>
            Hola
            <input type="text" placeholder="Hola" />
          </label>
        </Col>
        <Col>
          <label>
            Hola
            <input type="text" placeholder="Hola" />
          </label>
          <label>
            Hola
            <input type="text" placeholder="Hola" />
          </label>
          <label>
            Hola
            <input type="text" placeholder="Hola" />
          </label>
        </Col>
      </Row>
    </Container>
  );
};

export default GridSystemTrial;
