import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

import './Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
  return (
   <Fragment>
      <Container className="Content" fluid="true">
         <Row className="Catchword">
            <Col>
               <h1>Probably the best team in the world</h1>
               <p id="P1">We gathered the team to create some fancy app while doing the React Course.</p>
               <p id="P2">Are we going to achieve that?</p>
               <b>SURE WE DO!</b>
            </Col>
         </Row>
      </Container>
      <Container className="Content2" fluid="true">
         <Row id="Members">
            <Col>
               <h1>Members</h1>
            </Col>
         </Row>
         <Row className="RowMembers">
            <Col sm={ 4 }>
               Pierwsza osoba
            </Col>
            <Col sm={ 4 }>
               Druga osoba
            </Col>
         </Row>
         <Row className="RowMembers2">
            <Col sm={ 4 }>
               Trzecia osoba
            </Col>
            <Col sm={ 4 }>
               Czwarta osoba
            </Col>
         </Row>
      </Container>
      <Container className="Content3" fluid="true">
         <Row className="RowProjectName">
            <Col sm={ 4 }>
               <h1>Project name</h1>
               <article>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices ac risus sed molestie. Phasellus malesuada nulla in ex tincidunt suscipit. Maecenas pulvinar dictum est et ornare.
               </article>
            </Col>
            <Col sm={ 4 } id="ProjectNameImage">
               <h1>OBRAZEK</h1>
            </Col>
         </Row>
      </Container>
   </Fragment>
  );
}

export default Content;
