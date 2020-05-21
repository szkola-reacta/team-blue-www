import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Header.scss';

function Header() {
   return (
      <Container className="header" fluid>
         <Row className="h-100">
            <Col className="header-logo" sm={12} md={4}>
               <div className="header-logo-symbol">
                  <span>B</span>
               </div>
               <div className="header-logo-text">TEAM</div>
            </Col>
            <Col className="header-nav" md={8}>
               <a href="/" className="header-nav-btn">Home</a>
               <a href="#project-info" className="header-nav-btn">Project</a>
               <a href="#team-members" className="header-nav-btn">Members</a>
            </Col>
         </Row>
      </Container>
   );
}

export default Header;
