import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetGame } from '../actions/resetgame';
import {createAnswer} from '../actions/answer';

class EndGame extends Component {
    content = {
        true: {
            description: "CONGRATULATIOS, YOU WON!"
        },
        false: {
            description: "SORRY YOU LOST"
        }
    }
    render() {
        return (
            <div className="modal endgame">
                <h2>{this.content[this.props.won].description}</h2>
                <p>   HERE IS THE SECRET CODE</p>
                <div className="outer"><div className="answer"> {this.props.answer.map((color, i) => {
                    return <div className="bc" key={color + i} style={{ background: `radial-gradient(circle at 50px 50px, #000,${color}` }}></div>
                })}</div></div>
                <button className="reset" onClick={e=>{e.preventDefault(); this.props.resetGame(); this.props.createAnswer(this.props.colors)}}>RESET GAME</button>
            </div>

        )
    }
}
function mapStateToProps(state, props) {

    return {
        won: state.game.won,
        answer: state.game.answer,
        colors: state.game.colors
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ resetGame, createAnswer }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps )(EndGame)
