/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called 
 */
class Beat {
    constructor(src){
        this.audio= new Audio(src);
    }
    playFunction = () =>{
        this.audio.currentTime=0;
        this.audio.play();
    }
}



/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color=color;
        this.keyCode=keyCode;
        this.element=document.getElementById(keyCode);
        this.setButtonColorInHTML(color);
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = (color) => {
        this.element.style.borderColor=color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = (color) => {
        this.element.style.backgroundColor=color;
        this.element.style.borderColor=` 0px 0px 17px 0px ${this.color}`
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor='transparent';
        this.element.style.borderColor='none'
    }
    setIntervalTransition=()=>{
        setInterval(()=>{
            this.deselect();
        },500)
    }
}