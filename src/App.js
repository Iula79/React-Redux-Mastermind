import React, { Component } from 'react';
import './App.css';
import ColorList from './containers/colorList';
import Board from './components/board';

// console.log state using $r.store.getState();
class App extends Component {

  constructor(props) {
    super(props);


    this.state = {
      shown: false,
    

    }
  }

  showLightbox = () => {
    this.setState({ shown: true })
    document.getElementsByTagName('body')[0].className += 'overflow';
  }

  hideLightbox = () => {
    this.setState({ shown: false })
    document.getElementsByTagName('body')[0].className = '';
  }

  render() {
    return (
      <div className="App">
        <ColorList />
        <Board />
      </div>
    );
  }
}

export default App;
