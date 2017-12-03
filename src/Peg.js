import React, { Component } from 'react';

class Peg extends Component {
    state = {
        newPegArray:this.props.pegArray
    }

    render() {

        return (
            <div className="peg">
                <div className="pegpin" style={{background:this.state.newPegArray[0]}}></div>
                <div className="pegpin" style={{background:this.state.newPegArray[1]}}></div>
                <div className="pegpin" style={{background:this.state.newPegArray[2]}}></div>
                <div className="pegpin" style={{background:this.state.newPegArray[3]}}></div> 
            </div>
        )
    }

}

export default Peg