import React, { Component } from 'react';
import Paddrum from './Paddrum';
import './Container.css';

class Container extends Component {

    render() { 
        return ( 
            <div className="container">
                 <h2 className="label">
                    Press a key
                </h2>
                <Paddrum 
                    sounds = {this.props.sounds}
                />
            </div>
         );
    }
}
 
export default Container;