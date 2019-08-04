import React, { Component } from 'react';
import './Controls.css';
import Volume from './Volume';


class Controls extends Component {


    volume = (e) => {
        this.props.volumeFoo(e.target.value)
    }
    
    render() { 

        return ( 
          <div className="control">
              <p>Power</p>
              <div className={"select " + (this.props.switchState ? "" : "flex-start")}>
                <button className= {"inner " + (this.props.switchState ? "" : "text")}  onClick={this.props.switchPower} ></button>
              </div>
              <Volume volumeFoo = {this.volume}/>
          </div>  
            
        );
    }
}
 
export default Controls;