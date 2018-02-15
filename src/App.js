import React, { Component } from 'react';
import './App.css';
import ColorList from './containers/colorList';
import Board from './components/board';

// console.log state using $r.store.getState();
class App extends Component {

  constructor(props) {
    super(props);

    this.changeRow = this.changeRow.bind(this)
    this.renderEnd = this.renderEnd.bind(this)
    this.setWin = this.setWin.bind(this)


    this.state = {

      currentRow: 1,
      guessCount: 0,
      shown: false,
      won: null

    }
  }

  changeRow() {
    this.setState({ currentRow: this.state.currentRow + 1, guessCount: this.state.guessCount + 1 })
    console.log(this.state.guessCount)
    if (this.state.guessCount === 9) {
      this.setWin(false);
    }
  }

  setWin(result) {
    console.log(result)
    this.setState({ won: result })
  }
  renderEnd(win) {
    // return <Endgame win={win} answer={this.state.answer}/>
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
        <ColorList />
        <Board />
      </div>
    );
  }
}

export default App;
