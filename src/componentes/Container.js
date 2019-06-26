import React, { Component } from 'react';
import Paddrum from './Paddrum';
import './Container.css';

class Container extends Component {

    render() { 
        return ( 
            <div className="container">
                <h2 className="label">{this.props.mydrumtype}</h2>
                <Paddrum 
                    mydrumtype = {this.props.mydrumtype}
                    sounds = {this.props.sounds}
                    updateDrumType={this.props.updateDrumType}
                />
            </div>
         );
    }
}
 
export default Container;