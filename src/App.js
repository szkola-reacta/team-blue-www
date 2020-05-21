import React from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import CatchWord from './components/CatchWord';
import ProjectInfo from './components/ProjectInfo';
import './App.scss';

const App = () => {
  const projectInfo = {
    imageUrl: 'https://www.polska.travel/images/pl-PL/glowne-miasta/gdansk/gdansk_motlawa_1170.jpg',
    projectTitle: 'Project Name',
    projectDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eligendi, nisi consequatur ratione eum nam accusantium quisquam molestias, dolorum ducimus officiis repellendus non expedita maxime libero reprehenderit provident voluptates autem.',
    projectUrl: 'https://github.com/szkola-reacta/team-blue-www'
  };

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
        <ProjectInfo {...projectInfo}/>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
