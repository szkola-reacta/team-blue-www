import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
   <Container className="Header" fluid="true">
      <Row>
         <Col sm={{ span: 1.5, offset: 1 }}>
            <div>
               <div id="Square">B</div> <div id="Team">TEAM</div>
            </div>
         </Col>
         <Col className="ButtonNav" sm={{ span: 2, offset: 3 }}>Home</Col>
         <Col className="ButtonNav" sm={ 2 }>Project</Col>
         <Col className="ButtonNav" sm={ 2 }>Members</Col>
      </Row>
   </Container>
  );
}

export default Header;
