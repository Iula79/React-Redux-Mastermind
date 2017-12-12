import React, { Component } from 'react';
import Cell from './Cell';
import Peg from './Peg';

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
        guess: [],
        pegArray:["black", "black", "black", "black"]
    }

    submitGuess() {
        this.compareAnswerToGuess(this.state.guess)
        return this.props.changeRow()
    }
    compareAnswerToGuess(guess) {
        var exactCount = 0;
        var nearCount = 0;
        // console.log("guess", guess)
        var answer = this.props.answer.slice()
        // console.log("answer", answer)
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
        // console.log(ecount)
        // console.log(ncount)
        if (ecount === 4){
            this.props.won()
        } else{
            let myArray = this.state.pegArray.slice()
            for(var i=0; i<ecount; i++){
                myArray[i]="red";
            }
            for(var j=ecount;j<ecount+ncount;j++ ){
                myArray[j]="white"
            }
            this.setState({pegArray:myArray});
            }        
    }

    render() {

        const { currentrow, currentcolor, row } = this.props

        let cellArray = []
        for (var i = 1; i <= 4; i++) {
            cellArray.push(<Cell key={i} currentcolor={currentcolor} row={row} currentrow={currentrow} addcolor={this.addColor} updatecount={this.updateCount} count={this.state.count} cell={i} />)
        }
        // cellArray.push(<Peg pegArray={this.state.pegArray}/>)

        return (
            <div className="row grid">
                <div className="empty" ></div>
                {cellArray}
                <div className="choiceBoard"><Peg pegArray={this.state.pegArray}/></div>
                
                {/* react if statement */}
                {row === currentrow && this.state.count === 4?
                    <div className="empty"><button onClick={this.submitGuess} >Submit</button></div>
                    :
                    <div className="empty" ></div>
                }
                
            </div>
        )
    }
}
export default Row