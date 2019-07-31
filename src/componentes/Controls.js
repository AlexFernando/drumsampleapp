import React, { Component } from 'react';
import './Controls.css';

class Controls extends Component {

    
    render() { 
        console.log(this.props.switchState, " ", this.props.switchPower );
        return ( 
          <div className="control">
              <p>Power</p>
              <div className={"select " + (this.props.switchState ? "" : "flex-start")}>
                <button className= {"inner " + (this.props.switchState ? "" : "text")}  onClick={this.props.switchPower} ></button>
              </div>
          </div>  
        );
    }
}
 
export default Controls;