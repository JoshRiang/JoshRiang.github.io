var Wail = new Audio('https://github.com/JoshRiang/LandunPJR/raw/main/audio/SIREN_1.mp3');
var Yelp = new Audio('https://github.com/JoshRiang/LandunPJR/raw/main/audio/SIREN_2.mp3');
var Phaser = new Audio('https://github.com/JoshRiang/LandunPJR/raw/main/audio/POLICE_WARNING.mp3');
var Horn = new Audio('https://github.com/JoshRiang/LandunPJR/raw/main/audio/AIRHORN_EQD.mp3');
var HighLow = new Audio('https://github.com/JoshRiang/LandunPJR/raw/main/audio/AMBULANCE_WARNING.mp3');
var Pulsar = new Audio('https://github.com/JoshRiang/LandunPJR/raw/main/audio/phaser.mp3');
var toggle = false;

// General Function
function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
};

function toggleButton() {
    var button = document.getElementById("toggle-btn")
    if (toggle == false) {
        toggle = true;  
        button.style.backgroundColor = "green";
    } else {
        toggle = false;  
        button.style.backgroundColor = "red";
    }
};

// WAIL
var WailTekan = false

function HoldWail() {
    if (toggle == false) {
        Wail.play();
        Wail.addEventListener('timeupdate', function(){
            var buffer = .50
            if(this.currentTime > this.duration - buffer){
                this.currentTime = 0
                this.play()
            }
        });
    }
}

function ToggleWail() {
    if (toggle == true && WailTekan == false) {
        stopAudio(Yelp)
        YelpTekan = false;
        stopAudio(Phaser)
        PhaserTekan = false;        
        stopAudio(HighLow)
        HighLowTekan = false;        
        stopAudio(Pulsar)
        PulsarTekan = false;        
        WailTekan = true;
        Wail.currentTime = 0;
        Wail.play();
        Wail.addEventListener('timeupdate', function(){
            var buffer = .30
            if(this.currentTime >= this.duration - buffer){
                this.currentTime = 0
                this.play()
            }
        });
    } else if (WailTekan == true) {
        WailTekan = false;
        stopAudio(Wail);
    }
};

function StopWail() {
    stopAudio(Wail);
}

// YELP
var YelpTekan = false

function HoldYelp() {
    if (toggle == false) {
        Yelp.play();
        Yelp.onended = () => {
            Yelp.play();
        } 
    }
}

function ToggleYelp() {
    if (toggle == true && YelpTekan == false) {
        stopAudio(Wail)
        WailTekan = false;
        stopAudio(Phaser)
        PhaserTekan = false;
        stopAudio(Pulsar)
        PulsarTekan = false;
        YelpTekan = true
        Yelp.play();
        Yelp.addEventListener('timeupdate', function(){
            var buffer = .44
            if(this.currentTime > this.duration - buffer){
                this.currentTime = 0
                this.play()
            }
        });
    } else if (YelpTekan == true){
        YelpTekan = false;
        stopAudio(Yelp);
    }
} 

function StopYelp() {
    stopAudio(Yelp);
}

// PHASER
var PhaserTekan = false

function HoldPhaser() {
    Phaser.play();
    Phaser.onended = () => {
        Phaser.play();
    }    
}

function TogglePhaser() {
    if (toggle == true && PhaserTekan == false) {
        stopAudio(Wail)
        WailTekan = false
        stopAudio(Yelp)
        YelpTekan = false
        stopAudio(Pulsar)
        PulsarTekan = false
        PhaserTekan = true
        Phaser.play();
        Phaser.onended = () => {
            Phaser.play();
        }
    } else if (PhaserTekan == true){
        PhaserTekan = false;
        stopAudio(Phaser);
    }
}

function StopPhaser() {
    stopAudio(Phaser);
}

// HIGH LOW

function HoldHighLow() {
    HighLow.play();
    HighLow.addEventListener('timeupdate', function(){
        var buffer = .30
        if(this.currentTime > this.duration - buffer){
            this.currentTime = 0
            this.play()
        }
    });
}

var HighLowTekan = false

function ToggleHighLow() {
    if (toggle == true && HighLowTekan == false) {
        HighLowTekan = true
        stopAudio(Wail)
        WailTekan = false;
        stopAudio(Yelp)
        YelpTekan = false;
        stopAudio(Pulsar)
        PulsarTekan = false;
        stopAudio(Phaser)
        HighLow.play();
        HighLow.addEventListener('timeupdate', function(){
            var buffer = .1
            if(this.currentTime > this.duration - buffer){
                this.currentTime = 0
                this.play()
            }
        });
    } else if (HighLowTekan == true){
        HighLowTekan = false;
        stopAudio(HighLow);
    }
}

function StopHighLow() {
    stopAudio(HighLow);
}

// Pulsar

function HoldPulsar() {
    Pulsar.play();
    Pulsar.addEventListener('timeupdate', function(){
        var buffer = .30
        if(this.currentTime > this.duration - buffer){
            this.currentTime = 0
            this.play()
        }
    });
}

var PulsarTekan = false

function TogglePulsar() {
    if (toggle == true && PulsarTekan == false) {
        PulsarTekan = true
        stopAudio(Wail)
        WailTekan = false;
        stopAudio(Yelp)
        YelpTekan = false;
        stopAudio(Phaser)
        PhaserTekan = false;
        Pulsar.play();
        Pulsar.addEventListener('timeupdate', function(){
            var buffer = .1
            if(this.currentTime > this.duration - buffer){
                this.currentTime = 0
                this.play()
            }
        });
    } else if (PulsarTekan == true){
        PulsarTekan = false;
        stopAudio(Pulsar);
    }
}

function StopPulsar() {
    stopAudio(Pulsar);
}

// HORN
Horn.loop = true

function HoldHorn() {
    Horn.play();
    Wail.pause();
    Yelp.pause();
    Phaser.pause();
    Pulsar.pause();
}

function StopHorn() {
    stopAudio(Horn);
    if (WailTekan == true) {
        Wail.play()
    } else if (YelpTekan == true) {
        Yelp.play()
    } else if (PhaserTekan == true) {
        Phaser.play()
    } else if (PulsarTekan == true) {
        Pulsar.play()
    }
}
