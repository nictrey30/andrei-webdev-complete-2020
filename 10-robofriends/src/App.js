import React, { useState } from 'react';
import CardList from './CardList';
import robots from './robots';
import SearchBox from './SearchBox';

function App() {
  const [robotsList, setRobotsList] = useState(robots);
  const [searchfield, setSearchField] = useState('');

  function onSearchChange(e) {
    setSearchField(e.target.value);
  }

  const filteredRobots = robotsList.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
