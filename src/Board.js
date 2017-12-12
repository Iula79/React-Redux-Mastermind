import React, { Component } from 'react';
import Row from './Row'

class Board extends Component {

    constructor(props) {
        super(props);

        this.changeRow = this.changeRow.bind(this)
        this.renderEnd = this.renderEnd.bind(this)

        let colors = ["#40e0d0",
            "#654321",
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
            currentColor: "#371c0e",
            currentRow: 1,
            answer: answer,
            colors: colors,
            guessCount: 0,
            won: null
        }
    }

    changeColor(color) {
        this.setState({ currentColor: color })
    }

    changeRow() {
        
        this.setState({ currentRow: this.state.currentRow + 1, guessCount: this.state.guessCount + 1  })
        console.log(this.state.guessCount)
        if(this.state.guessCount===9){
            this.renderEnd(false);
        }
    }

    renderEnd(result){
        console.log(result)
        this.setState({won:result})
        alert(`you ${result}`)
    }

    render() {

        let firstChoiceArray = []
        for (var k=0; k<2; k++){
            firstChoiceArray.push(<div className="empty" key={"a"+k}></div>)
            for (var j = 0; j < 4; j++) {
                firstChoiceArray.push(<div className="choiceBoard top" key={this.state.colors[j+k*4]}> <div className="bc choice"  style={{ background: `radial-gradient(circle at 50px 50px, #000,${ this.state.colors[j+k*4]})` }} onClick={this.changeColor.bind(this, this.state.colors[j+k*4])}></div></div>)
            }
            firstChoiceArray.push(<div id={"mycell"+k} key={"b"+k} className="choiceBoard top"></div>)
            firstChoiceArray.push(<div key={"c"+k} className="empty"></div>)
        }

        let boardArray = []
        for (var i = 1; i <= 10; i++) {
            boardArray.push(<Row row={i} key={i} renderEnd={this.renderEnd} currentrow={this.state.currentRow} answer={this.state.answer} currentcolor={this.state.currentColor} changeRow={this.changeRow} guessCount={this.state.guessCount}/>)
        }

        return (
            <div className="container">
                <div className="grid"> {firstChoiceArray}</div>
                {boardArray}
            </div>
        );
    }
}
export default Board