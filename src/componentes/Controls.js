import React, { Component } from 'react'

class Controls extends Component {
    state = {  }
    render() { 
        return ( 
          <div>
              <button onClick={this.props.switchPower} >Power</button>
          </div>  
        );
    }
}
 
export default Controls;