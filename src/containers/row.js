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
                <div className="choiceBoard"><Peg row={i} /></div>
                {this.props.currentRow == i && !board[i].includes('#371c0e')?
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
            
            this.boardRender(this.props.board)
            
        )

    }


}

function mapStateToProps(state) {
    return {
        board:state.game.board,
        currentRow: state.game.currentRowIndex
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitRow }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Row)