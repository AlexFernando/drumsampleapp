import React, { Component } from 'react';
import Paddrum from './Paddrum';
import Controls from './Controls';
import './Container.css';

class Container extends Component {

    render() { 
        return ( 
            <div className="container">
                <Paddrum 
                    mydrumtype = {this.props.mydrumtype}
                    sounds = {this.props.sounds}
                    updateDrumType={this.props.updateDrumType}
                    switchState = {this.props.switchState}
                />
                <Controls
                    switchPower = {this.props.switchPower}
                    switchState = {this.props.switchState}
                />
            </div>
         );
    }
}
 
export default Container;