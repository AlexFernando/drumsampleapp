import React, { Component } from 'react';
import SinglePad from './SinglePad';
import './Paddrum.css';

class Paddrum extends Component {
 
    render() { 
        return ( 
           
            <div className="mydrumpad">
                            <h2 className="label">{this.props.mydrumtype}</h2>
                <ul className="singlepad">
                    {
                        Object.keys(this.props.sounds).map(sound => (
                            <SinglePad 
                                mydrumtype = {this.props.mydrumtype}
                                info = {this.props.sounds[sound]}
                                key = {sound}
                                updateDrumType={this.props.updateDrumType}
                                switchState = {this.props.switchState}
                            />   
                        ))
                    }

                </ul>
            </div>
         );
    }
}
 
export default Paddrum;