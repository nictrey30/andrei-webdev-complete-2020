import React from 'react';
import randomColor from 'randomcolor';

function Card({ name, email, id }) {
  const urlString = `https://robohash.org/${id}?200x200`;
  return (
    <div
      style={{ backgroundColor: randomColor() }}
      className='tc dib br3 pa3 ma3 grow bw2 shadow-5'
    >
      <img src={urlString} alt='robots' />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
