import React, { Component } from 'react';
import './App.css';
const Calc = require('./Calc')

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calc />
      </div>
    );
  }
}

export default App;
