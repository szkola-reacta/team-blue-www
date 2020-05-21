import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import CatchWord from './components/CatchWord';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <Content>
        <CatchWord>
          <div>
            <h1>Probably the best team in the world</h1>
            <p>We gathered the team to create some fancy app while doing the React Course.</p>
            <p>Are we going to achieve that?</p>
            <b>SURE WE DO!</b>
          </div>
        </CatchWord>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
