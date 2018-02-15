import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {submitRow} from '../actions/submit';

import Cell from './cell';
import Peg from './peg';

class Row extends Component {


    render() {
        let cellArray = []
        for (var i = 1; i <= 4; i++) {
            cellArray.push(<Cell key={i} cell={i} />)
        }
        return (
            <div className="row grid">
                <div className="empty" ></div>
                {cellArray}
                <div className="choiceBoard"><Peg /></div>

                <div className="empty"><button className="submit" onClick={this.props.submitRow.bind(this, 5, 6)} >Submit</button></div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        currentRow:state.row,
        guessCount:state.guessCount
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {submitRow}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Row)