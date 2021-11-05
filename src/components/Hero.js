import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Products from "./Products";
const Hero = () => {
  return (
    <Container className=" mt-5 vh-100">
      <h1>
        <span>
          <h6 style={{
            fontWeight: "900",
            fontSize: "1.2rem",
            fontFamily: "PT Sans",
          }}>CARTIO.</h6>
        </span>
        <span >
          <h6 style={{ letterSpacing: "-2",fontWeight: "100", fontSize: "1.2rem" }}> BESTSELLERS </h6>
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
