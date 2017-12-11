import React, { Component } from 'react';

import Board from './Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="trial"><div className="test bordertop"></div></div>
        <Board />
        <div className="trial"><div className="test borderbottom"></div></div>
      </div>
    );
  }
}

export default App;
