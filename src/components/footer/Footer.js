import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
     <Fragment>
       <Container className="Footer" fluid>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            Footer
          </Col>
        </Row>
       </Container>
     </Fragment>
  );
}

export default Footer;
