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
            board: function () {
                var boardarray = []
                for (var i = 0; i < 10; i++) {
                    var boardrow = []
                    for (var j = 0; j < 4; j++) {
                        boardrow.push(null)
                    }
                    boardarray.push(boardrow)
                }
                return boardarray
            }(),
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
        let boardLength = this.state.board.length

        let choiceArray = []
        for (var j = 0; j < 8; j++) {
            choiceArray.push(<div className="bc" key={this.state.colors[j]} style={{ background: this.state.colors[j] }} onClick={this.changeColor.bind(this, this.state.colors[j])}></div>)

        }
        let boardArray = []
        for (var i = 1; i <= boardLength; i++) {
            boardArray.push(<Row row={i} key={i} currentrow={this.state.currentRow} answer={this.state.answer} currentcolor={this.state.currentColor} changeRow={this.changeRow} />)
        }

        return (
            <div >
                <div className="choiceDiv" >{choiceArray}</div>
                <div> {boardArray}</div>
            </div>
        );
    }
}
export default Board