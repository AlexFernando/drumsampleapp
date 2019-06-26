import React, { Component } from 'react';
import Container from  './componentes/Container';
import soundObject from './data/data.json';
import './App.css';


class App extends Component {


  state = { 
    sounds : []
  }

  componentDidMount() {
    this.setState({
      sounds: soundObject
    })
  }

  render() { 
    return (  
      
      <div className="fullscreenDiv">
        <h1 className="title">
          FCC Drum Machine
        </h1>
       <Container 
        sounds = {this.state.sounds}
      />
      </div>
     
    );
  }
}
 
export default App;
