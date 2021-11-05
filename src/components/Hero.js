import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "./Products";
const Hero = () => {
  return (
    <Container className=" mt-5 vh-100">
      <h1>
        <span
          style={{
            fontWeight: "600",
            fontSize: "1.5rem",
            fontFamily: "PT Sans",
          }}
        >
          CARTIO.
        </span>{" "}
        <span style={{ fontWeight: "100", fontSize: "1.5rem" }}>
          BEST SELLERS.
        </span>
      </h1>
      <Row>
        <Col>
          {" "}
          <Products />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
