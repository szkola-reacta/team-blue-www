import React from 'react';

import './App.css';
import TeamMembers from './components/TeamMembers';

const members = [{
  firstName: 'John',
  lastName: 'Doe',
  info: 'Lorem ipsum',
  links: ['https://github.com/123','https://linkedin.com/345']
}, {
  firstName: 'John',
  lastName: 'Doe',
  info: 'Lorem ipsum',
  links: ['https://github.com/123','https://linkedin.com/345']
},{
  firstName: 'John',
  lastName: 'Doe',
  info: 'Lorem ipsum',
  links: ['https://github.com/123','https://linkedin.com/345']
},{
  firstName: 'John',
  lastName: 'Doe',
  info: 'Lorem ipsum',
  links: ['https://github.com/123','https://linkedin.com/345']
}];

function App() {

  return (
    <div className="App">
      <h1>Team BLUE</h1>
      <div className="test">
        <TeamMembers members={members}/>
      </div>
    </div>
  );
}

export default App;
