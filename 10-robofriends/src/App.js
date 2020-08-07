import React, { useState } from 'react';
import CardList from './CardList';
import robots from './robots';
import SearchBox from './SearchBox';
import './App.css';

function App() {
  const [robotsList, setRobotsList] = useState(robots);
  const [searchfield, setSearchField] = useState('');

  function onSearchChange(e) {
    const { value } = e.target;
    setSearchField(value);
  }

  const filteredRobots = robotsList.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className='tc'>
      <h1 className='f1 tracked-mega'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
