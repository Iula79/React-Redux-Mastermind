import React, { Component } from 'react';
import Row from './Row'

class Board extends Component {

    constructor(props) {
        super(props);

        this.changeRow = this.changeRow.bind(this)

        let colors = ["#40e0d0",
            "#000000",
            "#800080",
            "#ffa500",
            "#0000ff",
            "#ff0000",
            "#008000",
            "#ffff00"];
        let answer = [];
        for (var i = 0; i < 4; i++) {
            var rand = Math.floor(Math.random() * colors.length);
            answer.push(colors[rand]);
        }

        this.state = {
            currentColor: "gray",
            currentRow: 1,
            answer: answer,
            colors: colors,
            guessCount: 0
        }
    }

    changeColor(color) {
        this.setState({ currentColor: color })
    }

    changeRow() {
        this.setState({ currentRow: this.state.currentRow + 1 })
        this.setState({ guessCount: this.state.guessCount + 1 })
    }

    render() {

        let firstChoiceArray = []
        for (var k=0; k<2; k++){
            firstChoiceArray.push(<div className="empty"></div>)
            for (var j = 0; j < 4; j++) {
                firstChoiceArray.push(<div className="bc choice" key={this.state.colors[j+k]} style={{ background: this.state.colors[j+k*4] }} onClick={this.changeColor.bind(this, this.state.colors[j+k])}></div>)
            }
            firstChoiceArray.push(<div className="empty"></div>)
            firstChoiceArray.push(<div className="empty"></div>)
        }

        let boardArray = []
        for (var i = 1; i <= 10; i++) {
            boardArray.push(<Row row={i} key={i} currentrow={this.state.currentRow} answer={this.state.answer} currentcolor={this.state.currentColor} changeRow={this.changeRow} guessCount={this.state.guessCount}/>)
        }

        return (
            <div className="container">
                <div class="grid">  {firstChoiceArray}</div>
                {boardArray}
            </div>
        );
    }
}
export default Board