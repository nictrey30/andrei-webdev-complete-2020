import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

// mapStateToProps - tell me what piece of state i need to listen to and send it down as props
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
// dispatch is used to send actions
// onSearchChange is a prop that is going to receive an event, because of the input box that users type on
// mapDispatchToProps says: what props i should listen to that are actions that need to be dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    // onRequestRobots: () => requestRobots(dispatch)
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
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
// connect() accepts 2 params - mapStateToProps, mapDispatchToProps
// subscribe to any state changes in the redux store aka what state shoud i listen to, what action(dispatch) should i listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);
