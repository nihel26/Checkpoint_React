import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Forms from "../components/Forms";
const Layout = () => {
  return (
    <Container>
      <Row style={{ backgroundColor: "black" }}>
        <Col>
          <h1 style={{ color: "white", padding: "20px" }}>This My First App</h1>
        </Col>
        <Col>
          <h2 style={{ color: "white", padding: "20px" }}>
            Check point ReactJS
          </h2>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#E9EBEC" }}>
        <Col style={{ padding: "20px" }}>
          {" "}
          <Forms />{" "}
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black" }}>
        <Col>
          <h3 style={{ color: "white", padding: "20px" }}>
            For more information please contact us{" "}
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
