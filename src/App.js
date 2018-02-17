import React, { Component } from 'react';
import './App.css';
import ColorList from './containers/colorList';
import Board from './components/board';
import EndGame from './containers/endgame';
import {connect} from 'react-redux';


// console.log state using $r.store.getState();
class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      shown: false,
    

    }
  }

  showLightbox = () => {
    this.setState({ shown: true })
    document.getElementsByTagName('body')[0].className += 'overflow';
  }

  hideLightbox = () => {
    this.setState({ shown: false })
    document.getElementsByTagName('body')[0].className = '';
  }

  render() {
    return (
      <div className="App">
        <button onClick={e=>{e.preventDefault()}}>Instructions</button>
        <ColorList />
        <Board />
        {(this.props.won||this.props.guesses ===11) &&
        <EndGame />
        }
      </div>
    );
  }
}
function mapStateToProps(state) {

  return {
      guesses: state.game.board.length,
      won:state.game.won
  }
}


export default connect(mapStateToProps)(App)


