import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'; // Pour le style du footer

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="text-center">
            <p>&copy; 2025 cover maker. All rights reserved.</p>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <p>
              <a href="#privacy-policy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
