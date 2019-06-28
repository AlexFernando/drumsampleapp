import React, { Component } from 'react';
import Container from  './componentes/Container';
import soundObject from './data/data.json';
import './App.css';


class App extends Component {


  state = { 
    sounds : [],
    mydrumtype : 'Press a key'
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
      />
      </div>
     
    );
  }
}
 
export default App;
