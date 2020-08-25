import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  // if anything has an error it will run this lifecycle hook
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <h1>Ooops. That is not good.</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
