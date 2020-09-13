import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    // the searchField that we are going to return, which is going to be used as props by the App component is going to come from state.searchRobots.searchField
    // we receive the state from the Provier in index.js as "store" which is created with searchRobots reducer
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

// dispatch is what triggers the action and the action is the objects we created in actions.js
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // thunkMiddleware because requestRobots is going to return a function, is going to provide the dispatch function that we get from the mapDispatchToProps to this second layer function
    // we need to pass down the dispatch to the action requestRobots, which is going to take that dispatch and return a function, on which thunkMiddleware will act upon it
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  // after connect, i can remove the onSearchChange, because that is coming down as props, we don't need to declare it as a method of App
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

// connect is going to return another function, and it accepts two parameters: mapStateToProps, mapDispatchToProps
// to connect the App means to tell App to what changes should be interested in
// mapStateToProps - what state should i listen to?
// mapDispatchToProps - what dispatch aka action should i listen to?

// subscribe to any state changes in the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
