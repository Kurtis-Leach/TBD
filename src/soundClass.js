class Sound {
    
    constructor(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    
    document.body.append(this.sound);
    }
    play(){
        this.sound.play();
    }
    stop(){
        this.sound.pause();
    }    
}

function backgroundMusic() {
    myMusic = new Sound("./Back.mp3");
    myMusic.volume = .10
    myMusic.play();
    
}

function cardPullSound() {
    myMusic = new Sound("./CardDrop.wav");
    myMusic.play();
    setTimeout(()=>{
        myMusic.stop()
    },500)
}