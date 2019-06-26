import React, { Component } from 'react'
import './App.css';
import Container from  './componentes/Container';
import soundObject from './data/data.json';

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
      <Container
        sounds = {this.state.sounds}
      />
    );
  }
}
 
export default App;
