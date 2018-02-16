import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { submitRow } from '../actions/submit';

import Cell from './cell';
import Peg from './peg';

class Row extends Component {

    render() {
        let cellArray = []
        for (var i = 0; i < 4; i++) {
            cellArray.push(<Cell key={i} cell={i} row={this.props.row} />)
        }
        return (
            <div className="row grid">
                <div className="empty" ></div>
                {cellArray}
                <div className="choiceBoard"><Peg /></div>
                {this.props.render?
                    <div className="empty"><button className="submit" onClick={this.props.submitRow.bind(this)} >Submit</button></div>
                    :
                    <div className="empty" ></div>
                }
            </div>
        )
    }
}

function mapStateToProps(state,props) {
    var render = (state.game.board.length-1 === props.row)&&(state.game.board.length<10)
    console.log(render)
    return {
        render
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ submitRow }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Row)