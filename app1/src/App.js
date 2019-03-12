import React, { Component } from 'react';
import './App.css'
import * as styles from './styles'

class App extends Component {
  name="bpreki"  //property of app class

  render() {
    return (
      <div className="App">
      <div style={styles.styles}>
      style from styles.js
      </div><br />
      <button> Button 1 </button><br />
      React <br />
      {this.name}
      </div>
    );
  }
}

export default App;
