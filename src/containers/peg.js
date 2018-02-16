import React, { Component } from 'react';
import { connect } from 'react-redux';

class Peg extends Component {

    renderPins(col) {
        let pinArray = [];
        let i = 0;
        while (i <=3 ) {
            if (col) {
                pinArray.push(<div key={i} className="pegpin" style={{ background: col[i] }}></div>)
            } else {
                pinArray.push(<div key={i} className="pegpin" style={{ background: 'black' }}></div>)
            }
            i++
        }
        return pinArray
    }

    render() {

        return (
            <div className="peg">
                {this.renderPins(this.props.pinCol)}
            </div>
        )

    }
}
function mapStateToProps(state, props) {

    return {
        pinCol: state.game.pegBoard[props.row]
    }
}


export default connect(mapStateToProps)(Peg)
