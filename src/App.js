import React from 'react';
import Header from './components/header/';
import Content from './components/content/';
import Footer from './components/footer/';

function App() {
  return (
    <div>
      <Header />
      <Content
        title="Probably the best team in the world"
        text1="We gathered the team to create some fancy app while doing the React Course."
        text2="Are we going to achieve that?"
        bold="SURE WE DO!" />
      <Footer />
    </div>
  );
}

export default App;
