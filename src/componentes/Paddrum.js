import React, { Component } from 'react';
import SinglePad from './SinglePad';
import './Paddrum.css';

class Paddrum extends Component {
 
    render() { 
        return ( 
            <div className="mydrumpad">
                <ul className="singlepad">
                    {
                        Object.keys(this.props.sounds).map(sound => (
                            <SinglePad 
                                info = {this.props.sounds[sound]}
                                key = {sound}
                            />   
                        ))
                    }
                </ul>
            </div>
         );
    }
}
 
export default Paddrum;