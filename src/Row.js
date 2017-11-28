import React, { Component } from 'react';
import Cell from './Cell'

class Row extends Component{
    
    state = {
        newrow : this.props.currentrow,
        changerow: this.props.changeRow

    }
   
   render(){
    let currentcolor = this.props.currentcolor
    
    let cellArray = []
        for (var i=1; i<= 4; i++){
                cellArray.push(<Cell row={i} key={i} currentcolor={currentcolor} />)
            }
       return(
           <div className="br">
            { cellArray}
            <button onClick={this.state.changerow.bind(this, this.state.newrow)} >Submit</button>
           </div>
       )
   } 
}
export default Row