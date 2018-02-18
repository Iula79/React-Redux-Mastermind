import React, { Component } from 'react';
import './App.css';
import ColorList from './containers/colorList';
import Board from './components/board';
import EndGame from './containers/endgame';
import {connect} from 'react-redux';
import LightBox from './containers/lightbox';
import {toggleLightbox} from './actions/togglelightbox';
import {bindActionCreators} from 'redux';

// console.log state using $r.store.getState();
class App extends Component {

  render() {
    return (
      <div className="App">
        <button onClick={e=>{e.preventDefault(); this.props.toggleLightbox()}}>Instructions</button>
        <ColorList />
        <Board />
        {(this.props.won||this.props.guesses ===11) &&
        <EndGame />
        }
        { this.props.on &&
        <LightBox />
        }
      </div>
    );
  }
}
function mapStateToProps(state) {

  return {
      guesses: state.game.board.length,
      won:state.game.won,
      on:state.lightBoxOn 
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLightbox }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps )(App)


