import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

                <div className="empty"><button className="submit" >Submit</button></div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {


    }
}

export default Row