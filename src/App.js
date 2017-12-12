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
    document.getElementsByTagName('body')[0].className+='overflow';
  }
  hideLightbox =()=>{
    this.setState({shown:false})
    document.getElementsByTagName('body')[0].className='';  
  }
  
  render() {
    return (
      <div className="App">
      <div className="heading"><h1>Mastermind Game</h1>
        <p className="instructions" onClick={this.showLightbox}>How to play</p></div>
        {this.state.shown&&
          <Lightbox  hideLightbox={this.hideLightbox}/>
          }
        <div className="trial"><div className="test bordertop"></div></div>
        <Board />
        <div className="trial"><div className="test borderbottom"></div></div>
      </div>
    );
  }
}

export default App;
