import React from 'react';

import './CatchWord.scss';
import Background from './bg.jpg';

function CatchWord(props) {
  const catchWordStyle = {
    backgroundImage: `url(${Background})`
  };

  return (
    <div style={catchWordStyle} className="catch-word">
      {props.children}
    </div>
  );
}

export default CatchWord;