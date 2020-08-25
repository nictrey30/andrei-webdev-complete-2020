import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
      <div>
        <img src={`https://robohash.org/${id}?200x200`} alt='robots' />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
