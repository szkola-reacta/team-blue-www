import React from 'react';
import Header from './components/header/Header.js';
import Content from './components/content/Content.js';
import Footer from './components/footer/Footer.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
