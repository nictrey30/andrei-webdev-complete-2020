import React from 'react';
// we need to tell Scroll to render what is inside of it, because it is wrapping the CardList
// every single component in React has the Children property
function Scroll(props) {
  // console.log(props);
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
}

export default Scroll;
