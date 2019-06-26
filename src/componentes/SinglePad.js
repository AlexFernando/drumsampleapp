import React from 'react';
import './SinglePad.css'


const SinglePad = (props) => {
    
    const {drumType, keyLetter, url} = props.info;

    const playPad = (e) => {
        const sound = document.getElementById(keyLetter);
        sound.currentTime = 0;
        sound.play();
    }

    return ( 
    
        <div className="drum-pad" id={drumType} onClick={playPad} >
                        <p>{keyLetter}</p>
            <audio
                id = {keyLetter}  
                src = {url}  
            />
        </div>
     );
}
 
export default SinglePad;