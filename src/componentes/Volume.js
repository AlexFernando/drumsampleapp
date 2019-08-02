import React from 'react';
import './Volume.css';

const Volume = () => {
    return ( 
        <div class="volume-div">
            <input
                className="volume"
                type="range"
                id="start"
                name="volume"
                min="0"
                max="100"
            />
    </div>

     );
}
 
export default Volume;