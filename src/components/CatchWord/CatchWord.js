import React from 'react';

import './CatchWord.scss';

function CatchWord(props) {
  return (
    <div className="catch-word">
      {props.children}
    </div>
  );
}

export default CatchWord;