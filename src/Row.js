import React, { Component } from 'react';
import Cell from './Cell'

class Row extends Component{
    constructor(props){
    super(props);
    this.updateCount = this.updateCount.bind(this)
    }
    
    state = {
       count:0
   }
   updateCount(){
    this.setState({count:this.state.count +1})
    }
   render(){
   
    const {currentrow, currentcolor, changeRow,row} = this.props
     
    let cellArray = []
        for (var i=1; i<= 4; i++){
                cellArray.push(<Cell key={i} currentcolor={currentcolor} row={row} currentrow={currentrow} updatecount={this.updateCount} count={this.state.count}/>)
            }

       return(
           <div className="br">
            { cellArray}
            {/* react if statement */}
            { row === currentrow && this.state.count === 4 &&
            <button onClick={()=>changeRow()} >Submit</button>
            }
           </div>
       )
   } 
}
export default Row