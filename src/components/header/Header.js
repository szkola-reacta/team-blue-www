import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Header.css';

function Header() {
  return (
   <Container className="header" fluid="true">
      <Row>
         <Col sm={{ span: 1.5, offset: 1 }}>
               <div id="square">B</div> <div id="team">TEAM</div>
         </Col>
         <Col className="button-nav" sm={{ span: 2, offset: 3 }}>Home</Col>
         <Col className="button-nav" sm={ 2 }>Project</Col>
         <Col className="button-nav" sm={ 2 }>Members</Col>
      </Row>
   </Container>
  );
}

export default Header;
