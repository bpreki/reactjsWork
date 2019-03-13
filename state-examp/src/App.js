import React, { Component } from 'react';
import './App.css';
import Container1 from './containers/container1'
import Component1 from './functional/component1'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container1 ide="VScode" lang="React" /><br />
      <Component1 name="bpreki" age={26} cTask="build simplified react apps"/>
      </div>
    );
  }
}

export default App;
