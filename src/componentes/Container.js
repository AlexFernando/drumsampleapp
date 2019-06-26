import React, { Component } from 'react';
import Paddrum from './Paddrum';


class Container extends Component {

    render() { 
        return ( 
            <div>
                <h1>
                    Desde container 
                </h1>
                <Paddrum 
                    sounds = {this.props.sounds}
                />
            </div>
         );
    }
}
 
export default Container;