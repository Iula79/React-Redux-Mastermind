import React, { Component } from 'react';
import Cell from './Cell'

class Row extends Component{
    
    state = {
        updaterow: this.props.updaterow,
        newrow : this.props.currentrow

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
            <button currentrow={this.state.currentRow}>Submit</button>
           </div>
       )
   } 
}
export default Row