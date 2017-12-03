import React, { Component } from 'react';

class Peg extends Component {

    render() {

        return (
            <div className="peg">
                <div className="pegpin" style={{background:this.props.pegArray[0]}}></div>
                <div className="pegpin" style={{background:this.props.pegArray[1]}}></div>
                <div className="pegpin" style={{background:this.props.pegArray[2]}}></div>
                <div className="pegpin" style={{background:this.props.pegArray[3]}}></div> 
            </div>
        )
        
    }

}

export default Peg