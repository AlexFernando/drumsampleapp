import React, { Component } from 'react';
import './SinglePad.css'


class SinglePad extends Component{
    

    playPad = (e) => {
        const sound = document.getElementById(this.props.info.keyLetter);
        sound.volume = this.props.volume / 100;
        sound.currentTime = 0;
        sound.play();
        this.props.updateDrumType(this.props.info.drumType);
    }

    keyboardPress = (e) => {
        if(e.key.toUpperCase() === this.props.info.keyLetter) {
            this.playPad();
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyboardPress);
    }
      
    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyboardPress);
    }
      

    render () {
        const {drumType, keyLetter, url} = this.props.info;
    
        return ( 

            <div className="drum-pad" id={drumType} onClick={this.playPad}>
                                <p>{keyLetter}</p>
                    <audio muted={`${this.props.switchState ? "" : "muted"}`}
                        id = {keyLetter}  
                        src = {url}  
                    />
                </div>
             );
    }
}
 
export default SinglePad;