import React, { Component } from 'react';

import Board from './Board';
import './App.css';
import Lightbox from './Lightbox';

class App extends Component {
  state = {
    shown:false
  }
  showLightbox =()=>{
    this.setState({shown:true})
  }
  hideLightbox =()=>{
    this.setState({shown:false})
  }
  
  render() {
    return (
      <div className="App">
      <div className="heading"><h1>Mastermind Game</h1>
        <p onClick={this.showLightbox}>How to play</p></div>
        {this.state.shown&&
          <Lightbox />
          }
        <div className="trial"><div className="test bordertop"></div></div>
        <Board />
        <div className="trial"><div className="test borderbottom"></div></div>
      </div>
    );
  }
}

export default App;
