import React from 'react';
import './Volume.css';


const Volume = (props) => {

    
    return ( 
        <div className="volume-div">
            <input
                className="volume"
                type="range"
                id="start"
                name="volume"
                min="0"
                max="100"
                onInput = {props.volumeFoo}
            />
    </div>

     );
}
 
export default Volume;