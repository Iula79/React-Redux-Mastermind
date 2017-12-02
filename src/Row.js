import React, { Component } from 'react';
import Cell from './Cell'

class Row extends Component {
    constructor(props) {
        super(props);
        this.updateCount = this.updateCount.bind(this)
        this.addColor = this.addColor.bind(this)
        this.submitGuess = this.submitGuess.bind(this)
        this.compareAnswerToGuess = this.compareAnswerToGuess.bind(this)
        this.checkWin = this.checkWin.bind(this)
    }

    state = {
        count: 0,
        guess: []
    }

    submitGuess() {
        this.compareAnswerToGuess(this.state.guess)
        return this.props.changeRow()
    }
    compareAnswerToGuess(guess) {
        var exactCount = 0;
        var nearCount = 0;
        console.log("guess", guess)
        var answer = this.props.answer.slice()
        console.log("answer", answer)
        for (var i = 0; i < guess.length; i++) {
            if (guess[i] === answer[i]) {
                exactCount++
                guess[i] = NaN;
                answer[i] = NaN;
            }
        }
        for (var l = 0; l < guess.length; l++) {
            for (var j = 0; j < guess.length; j++) {
                if (guess[l] === answer[j]) {
                    nearCount++
                    guess[l] = NaN;
                    answer[j] = NaN;
                }
            }
        }
        console.log(exactCount)
        console.log(nearCount)
        this.checkWin(exactCount, nearCount)
    }
    updateCount() {
        this.setState({ count: this.state.count + 1 })
    }
    addColor(color, cell) {
        var myguess = this.state.guess.slice()
        myguess[cell] = color
        this.setState({ guess: myguess })
    }
    checkWin(ecount, ncount){
        if (ecount + ncount === 4){
            alert('you won!')
        }
    }

    render() {

        const { currentrow, currentcolor, row } = this.props

        let cellArray = []
        for (var i = 1; i <= 4; i++) {
            cellArray.push(<Cell key={i} currentcolor={currentcolor} row={row} currentrow={currentrow} addcolor={this.addColor} updatecount={this.updateCount} count={this.state.count} cell={i} />)
        }

        return (
            <div className="br">
                {cellArray}
                {/* react if statement */}
                {row === currentrow && this.state.count === 4 && 
                    <button onClick={this.submitGuess} >Submit</button>
                }
            </div>
        )
    }
}
export default Row