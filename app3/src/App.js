import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './containers/container1';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container1 ide="VScode" lang="React" /><br />
      <Component1 name="bpreki" age={25} cTask="build simplified react apps"/>
      </div>
    );
  }
}

export default App;
