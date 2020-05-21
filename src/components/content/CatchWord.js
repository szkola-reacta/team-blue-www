import React, { Fragment } from 'react';

function CatchWord(props) {
   return (
     <Fragment>
         {/* { props.children } */}
         { console.log("CatchWord -> props.children " + props) }
     </Fragment>
   );
}

export default CatchWord;