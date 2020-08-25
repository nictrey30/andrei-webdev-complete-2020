import React from 'react';
// every single component in React has the propertu of "children"
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '800px'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
