import React, { Component } from 'react';
import './App.css';
import ColorList from './containers/colorList';

class App extends Component {

  constructor(props) {
    super(props);

    this.changeRow = this.changeRow.bind(this)
    this.renderEnd = this.renderEnd.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.setWin = this.setWin.bind(this)

    let answer = [];
    // for (var i = 0; i < 4; i++) {
    //   var rand = Math.floor(Math.random() * colors.length);
    //   answer.push(colors[rand]);
    // }

    this.state = {
      currentColor: "#371c0e",
      currentRow: 1,
      answer: answer,
      // colors: colors,
      guessCount: 0,
      shown: false,
      won: null

    }
  }

  changeColor(color) {
    this.setState({ currentColor: color })
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
  renderEnd(win){
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
        {/* <div className="trial"><div className="test bordertop"></div></div>
        <Board colors={this.state.colors} currentColor={this.state.currentColor} currentRow={this.state.currentRow} changeRow={this.changeRow} answer={this.state.answer} changeColor={this.changeColor} renderEnd={this.setWin} />
        <div className="trial"><div className="test borderbottom"></div></div> */}
      </div>
    );
  }
}

export default App;
