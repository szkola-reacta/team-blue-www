import React, { Fragment } from 'react';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import CatchWord from './components/CatchWord';
import ProjectInfo from './components/ProjectInfo';
import TeamMembers from './components/TeamMembers/TeamMembers';

import './App.scss';

const App = () => {
  const projectInfo = {
    imageUrl: 'https://www.polska.travel/images/pl-PL/glowne-miasta/gdansk/gdansk_motlawa_1170.jpg',
    projectTitle: 'Project Name',
    projectDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate eligendi, nisi consequatur ratione eum nam accusantium quisquam molestias, dolorum ducimus officiis repellendus non expedita maxime libero reprehenderit provident voluptates autem.',
    projectUrl: 'https://github.com/szkola-reacta/team-blue-www'
  };
  const members = [{
    firstName: 'Michał',
    lastName: 'Hajok',
    photoUrl: 'https://api.adorable.io/avatars/200/michalhajok.png',
    info: 'Tattooed iceland deep v jianbing raw denim keytar enamel pin iPhone copper mug lyft quinoa etsy polaroid locavore.',
    links: ['https://github.com/michalhajok', 'https://www.linkedin.com/in/michalhajok/']
  }, {
    firstName: 'Piotr',
    lastName: 'Łosiak',
    photoUrl: 'https://api.adorable.io/avatars/200/moose96.png',
    info: 'Gluten-free four dollar toast ugh, sartorial yr chillwave taxidermy deep v vinyl photo booth raclette.',
    links: ['https://github.com/moose96', 'https://www.linkedin.com/in/moose96/']
  }, {
    firstName: 'Marcin',
    lastName: 'Wijas',
    photoUrl: 'https://api.adorable.io/avatars/200/marcin16d.png',
    info: 'Banjo schlitz vegan poutine post-ironic. Hella kitsch flannel messenger bag stumptown ethical trust fund snackwave lumbersexual keffiyeh bitters.',
    links: ['https://github.com/marcin16d', 'https://www.linkedin.com/in/marcin16d/']
  }, {
    firstName: 'Kamil',
    lastName: 'Zieliński',
    photoUrl: 'https://api.adorable.io/avatars/200/greenik.png',
    info: '3 wolf moon paleo unicorn, activated charcoal cronut kale chips blog subway tile skateboard next level coloring book cold-pressed bicycle rights williamsburg.',
    links: ['https://github.com/greenik', 'https://www.linkedin.com/in/kamilzielinski1/']
  }];

  return (
    <Fragment>
      <Header />
      <Content>
        <CatchWord>
          <h1>Probably the best team in the world</h1>
          <p>We gathered the team to create some fancy app while doing the React Course.</p>
          <p>Are we going to achieve that?</p>
          <b>SURE WE DO!</b>
        </CatchWord>
        <ProjectInfo {...projectInfo} />
        <TeamMembers members={members} />
      </Content>
      <Footer />
    </Fragment>
  );
}

export default App;
