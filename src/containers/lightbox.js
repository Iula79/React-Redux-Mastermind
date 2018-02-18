import React, { Component } from 'react';
import {connect} from 'react-redux';
import {toggleLightbox} from '../actions/togglelightbox';
import {bindActionCreators} from 'redux';


class Lightbox extends Component{
    
    render(){
    return(
      
       
        <div className="modal rules">
        
        <div className="close" onClick={e=>{e.preventDefault(); this.props.toggleLightbox();}}>X</div>
        <h2> Mastermind - Rules of the game.</h2>     
              <p> The computer randomly picks a sequence of colors. For example: the secret code is blue, red, yellow, turquoise: </p>
              <div id ="computerCodeExample">
                <img src={require('../images/code.png')} alt="code"/>
              </div>
        
              <p>  The objective of the game is to guess the exact positions of the colors in the computer's sequence.</p>
        
              <p>  After filling a line with your guesses and clicking on the 'Submit' button, the computer responses with the result of your guess. Here is a sample guess: </p>
              <div id ="computerCodeExample">
                <img src={require('../images/guess.png')} alt="guess"></img>
              </div>
        
              <p>  For each color in your guess that is in the correct color and correct position in the code sequence, the computer display a small red peg on the right side of the current guess. This guess has one correct color in the right place, so gives one red peg.</p>
        
              <p>  For each color in your guess that is in the correct color but is NOT in the correct position in the code sequence, the computer display a small white color on the right side of the current guess.</p>
              <div id ="computerCodeExample">
                <img src={require('../images/peg.png')} alt="peg"></img>
              </div>
              <p>  You win the game when you manage to guess all the colors in the code sequence and when they all in the right position.</p>
        
              <p>  You lose the game if you use all attempts without guessing the computer code sequence.</p>
        
              <p>  Any color can be used any number of times in the code sequence. For example this is a valid secret code: </p>
        
              <div id ="computerCodeExample">
                <img src={require('../images/example.png')} alt="example" ></img>
              </div>
        
              <p> After filling a whole line, you can still change your selection before asking the computer to respond to your guess. When you're satisfied with your guess, just click on the 'Check' button and get the computer response.</p>
        
              <p>- Good Luck!!</p>
              </div>
       
    )
  }
}
function mapStateToProps(state) {
  console.log(state)
  return {
      on:state.lightBoxOn
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLightbox }, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps )(Lightbox)
