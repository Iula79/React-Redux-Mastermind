import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitRow } from '../actions/submit';

import Cell from './cell';
import Peg from './peg';

class Row extends Component {
    renderCells(index){
        let cellArray = []
        for (let j = 0; j < 4; j++) {
            cellArray.push(<Cell key={j} cell={j} row={index} />)
        }
        return cellArray
    }
    boardRender(board) {
        let rowArray = []
        for (let i = 0; i < board.length; i++) {
            rowArray.push(<div className="row grid" key={i}>
                <div className="empty" ></div>
                {this.renderCells(i)}
                <div className="choiceBoard"><Peg row={this.props.row} /></div>
                {this.props.render ?
                    <div className="empty"><button className="submit" onClick={this.props.submitRow.bind(this)} >Submit</button></div>
                    :
                    <div className="empty" ></div>
                }
            </div>)
        }
        return rowArray
    }

    render() {

        return (
            <div className="container">
           { this.boardRender(this.props.board)}
            </div>
        )

    }


}

function mapStateToProps(state) {
    var board = state.game.board
    return {
        board
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitRow }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Row)