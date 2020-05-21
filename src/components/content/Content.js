import React from 'react';
import Container from 'react-bootstrap/Container';

import './Content.scss';

function Content(props) {
  return (
    <Container className="content" fluid>
      {props.children}
    </Container>
  );
}

export default Content;