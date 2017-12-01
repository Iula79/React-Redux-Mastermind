import React, { Component } from 'react';
import Cell from './Cell'

class Row extends Component{
   
   render(){
   
    const {currentrow, currentcolor, changeRow,row} = this.props
    
    let cellArray = []
        for (var i=1; i<= 4; i++){
                cellArray.push(<Cell row={i} key={i} currentcolor={currentcolor} />)
            }
       return(
           <div className="br">
            { cellArray}
            {/* react if statement */}
            { row == currentrow &&
            <button onClick={()=>changeRow()} >Submit</button>
            }
           </div>
       )
   } 
}
export default Row