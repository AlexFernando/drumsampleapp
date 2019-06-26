import React, { Component } from 'react';
import SinglePad from './SinglePad';

class Paddrum extends Component {
 
    render() { 
        return ( 
            <div className="drumpad">
                <h2>
                    Desde Paddrum
                </h2>
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