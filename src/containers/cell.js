import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addColor} from '../actions/cellactions'
import {bindActionCreators} from 'redux';

class Cell extends Component {

    render() {
        return (
                <div className="choiceBoard"> <div className="bc" style={{ background: `radial-gradient(circle at 50px 50px, #000, ${this.props.cellColor})` }} onClick={this.props.addColor.bind(this, this.props.cell)} > </div></div>
        )
    }
}

function mapStateToProps(state, props){
    var myVar = state.game.board[props.row]?state.game.board[props.row][props.cell]:null 
            
    return {
        cellColor: myVar
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators( {addColor}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)