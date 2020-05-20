import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content(props) {
  return (
   <Fragment>
      <Container className="content" fluid="true">
         <Row className="catch-word">
            <Col>
               <h1>{ props.title }</h1>
               <p>{ props.text1 }</p>
               <p>{ props.text2 }</p>
               <b>{ props.bold }</b>
            </Col>
         </Row>
      </Container>
   </Fragment>
  );
}

// function catchWord() {
//    return (
//       <Row className="catch-word">
//          <Col>
//             <h1>Probably the best team in the world</h1>
//             <p>We gathered the team to create some fancy app while doing the React Course.</p>
//             <p>Are we going to achieve that?</p>
//             <b>SURE WE DO!</b>
//          </Col>
//       </Row>
//    );
// }

export default Content;
