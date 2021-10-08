import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer> 
      <Col className="text-white p-2 footer text-center" style={{backgroundColor:"#1d1d1d"}}>
            Copyright &copy; Audit Management
          </Col>
    </footer>
  );
};

export default Footer;
