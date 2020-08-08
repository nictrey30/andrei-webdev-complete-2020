import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
// import Scroll from './Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

function App() {
  const [robotsList, setRobotsList] = useState([]);
  const [searchfield, setSearchField] = useState('');

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  };

  useEffect(() => {
    fetchData()
      .then((users) => setRobotsList(users))
      .catch((err) => console.log(err));
  }, []);

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchField(value);
  };

  const filteredRobots = robotsList.filter((robot) =>
    robot.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <div className='tc'>
      {!robotsList.length ? (
        <h1>Loading</h1>
      ) : (
        <h1 className='f1 tracked-mega'>RoboFriends</h1>
      )}
      <SearchBox searchChange={onSearchChange} />
      {/* <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll> */}
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default App;
