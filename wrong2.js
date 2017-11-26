import React, { Component } from 'react';

class Board extends Component{
    constructor(props){
      super(props)
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
          answer:[],
          colors:["#40e0d0",
          "#000000",
          "#800080",
          "#ffa500",
          "#0000ff",
          "#ff0000",
          "#008000",
          "#ffff00"],
          createAnswer: function(){
            console.log("this",this);
            debugger
            for (var i = 0; i < 4; i++){
                var rand = Math.floor(Math.random() * this.colors.length);
                this.answer.push(this.colors[rand]);
              }
            //   console.log("Current answer is", answer);
          }()
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