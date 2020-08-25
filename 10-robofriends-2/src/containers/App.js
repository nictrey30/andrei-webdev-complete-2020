import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';
import { connect } from 'react-redux';

// mapStateToProps - tell me what piece of state i need to listen to and send it down as props
const mapStateToProps = (state) => {
  return {
    // the searchField that we are going to return, which is going to be used as props by the App component is going to come from state.searchRobots.searchField
    // we receive the state from the Provier in index.js as "store" which is created with searchRobots reducer
    searchField: state.searchField
  };
};

// dispatch is what triggers the action and the action is the objects we created in actions.js
// dispatch is used to send actions
// onSearchChange is a prop that is going to receive an event, because of the input box that users type on
// mapDispatchToProps says: what props i should listen to that are actions that need to be dispatched
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
      // searchField: '' -> serchField removed after mapStateToProps
    };
    // because the event happend in the input, the value of this will be the input in the SearchBox, which doesn't have state.robots --- without the binding
    // this.onSearchChange = this.onSearchChange.bind(this);
  }
  // syntax for custom components that makes sure that "this" value refers to the current component context in which it was created
  // onSearchChange = (e) => {
  //   this.setState({ searchField: e.target.value });
  // };

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    let responseRobots = users.map((user) => {
      return { id: user.id, name: user.name, email: user.email };
    });
    this.setState({ robots: responseRobots });
  }

  render() {
    // const { robots, searchField } = this.state; -> serchField removed after mapStateToProps
    // now searchField comes from the props send by connect
    const { searchField, onSearchChange } = this.props;
    const { robots } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className='tc'>Loading</h1>
    ) : (
      <div className='tc'>
        <h1 className='f2'>RoboFriends</h1>
        {/* <SearchBox searchChange={this.onSearchChange} /> */}
        <SearchBox searchChange={onSearchChange} />
        {/* the robots state is passed down as props */}
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
// connect() accepts 2 params - mapStateToProps, mapDispatchToProps
// subscribe to any state changes in the redux store aka what state shoud i listen to, what action(dispatch) should i listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);
