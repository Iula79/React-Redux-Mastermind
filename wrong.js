import React, { Component } from 'react';

class Board extends Component{
    constructor(props){
      super(props);
      
      let colors = ["#40e0d0",
            "#000000",
            "#800080",
            "#ffa500",
            "#0000ff",
            "#ff0000",
            "#008000",
            "#ffff00"];
        let answer = []; 
        for (var i = 0; i < 4; i++){
            var rand = Math.floor(Math.random() * colors.length);
            answer.push(colors[rand]);
        }

      this.state = {
          board : function(){
              var boardarray = []
              for (var i=0; i< 10 ; i++){
                  var boardrow = []
                  for (var j = 0; j<4; j++){
                      boardrow.push(null) 
                  }
                  boardarray.push(boardrow)
              }
              return boardarray
          }(),
          currentColor: "red",
          currentRow: 1,
          answer: answer,
          colors: colors,
      }  

    }

    render() {
        console.log(this.state.board)
        return (
            <div> Hello</div>
        );
    }
}
export default Board