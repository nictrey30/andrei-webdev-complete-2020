import React from 'react';
import Card from './Card';

function CardList({ robots }) {
  return (
    <div className='flex flex-wrap justify-start'>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
