import React, { Component } from 'react';

class Cell extends Component{
    state = {
        newcolor: this.props.currentcolor
    }
    pressed(color){
        // alert("color " + color + " row " + this.props.row)
        console.log(color)
        this.setState({newcolor:color})
        // this.style(background)
    }
   render(){
    let currentcolor = this.props.currentcolor
       return(
        <div className="bc" style={{background:this.state.newcolor}} onClick={this.pressed.bind(this, currentcolor)}> </div>
       )
   } 
}
export default Cell