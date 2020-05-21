import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.scss';

function Footer() {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col>
          Copyright &copy; by Blue Team 2020
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
