import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    // the searchField that we are going to return, which is going to be used as props by the App component is going to come from state.searchRobots.searchField
    // we receive the state from the Provier in index.js as "store" which is created with searchRobots reducer
    // because in our index.js file we only have one reducer, we are creating the "store" from "searchRobots", state actuallly only has one field
    searchField: state.searchField
  };
};

const mapDispatchToProps = (dispatch) => {
  // the prop will be named "onSearchChange"
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
      // after connect, i can remove the searchField
      // searchfield: ''
    };
  }

  componentDidMount() {
    // console.log(this.props.store.getState());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  // after connect, i can remove the searchField, because that is coming down as props, we don't need to declare it as a method of App
  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value });
  // };

  render() {
    const { robots } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
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
// to connect the App means to tell App to subscribe to any change in the redux Store
// mapStateToProps - what state should i listen to?
// mapDispatchToProps - what dispatch aka action should i listen to?

export default connect(mapStateToProps, mapDispatchToProps)(App);
