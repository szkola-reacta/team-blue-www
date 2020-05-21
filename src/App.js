import React from 'react';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import CatchWord from './components/CatchWord';
import './App.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Content>
        <CatchWord>
          <h1>Probably the best team in the world</h1>
          <p>We gathered the team to create some fancy app while doing the React Course.</p>
          <p>Are we going to achieve that?</p>
          <b>SURE WE DO!</b>
        </CatchWord>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
