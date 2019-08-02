import React, { Component } from 'react';
import Container from  './componentes/Container';
import soundObject from './data/data.json';
import './App.css';

class App extends Component {


  state = { 
    sounds : [],
    mydrumtype : 'Press a key',
    switch : true,
    volume: 50
  }

  componentDidMount() {
    this.setState({
      sounds: soundObject
    })
  }

  updateDrumType = (drumName) => {
    this.setState({
      mydrumtype: drumName
    })
  }  
  
  switchPower = () => {
    this.setState({
      switch: !this.state.switch
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
        mydrumtype = {this.state.mydrumtype}
        updateDrumType={this.updateDrumType}
        switchPower = {this.switchPower}
        switchState = {this.state.switch}
        volumen = {this.state.volume}
      />


      </div>
     
    );
  }
}
 
export default App;
