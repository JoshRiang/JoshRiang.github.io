var Wail = new Audio('https://github.com/JoshRiang/siren.github.io/raw/main/audio/SIREN_1.mp3');
var Yelp = new Audio('https://github.com/JoshRiang/siren.github.io/raw/main/audio/SIREN_2.mp3');
var Phaser = new Audio('https://github.com/JoshRiang/siren.github.io/raw/main/audio/POLICE_WARNING.mp3');
var Horn = new Audio('https://github.com/JoshRiang/siren.github.io/raw/main/audio/AIRHORN_EQD.mp3');
var HighLow = new Audio('https://github.com/JoshRiang/siren.github.io/raw/main/audio/AMBULANCE_WARNING.mp3');
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
        Wail.addEventListener('ended', function() {
            Wail.play();
        }, false);  
    }
}

function ToggleWail() {
    if (toggle == true && WailTekan == false) {
        stopAudio(Yelp)
        YelpTekan = false;
        stopAudio(Phaser)
        PhaserTekan = false;        
        WailTekan = true;
        Wail.currentTime = 0;
        Wail.play();
        Wail.addEventListener('ended', function() {
            Wail.play
        }, false);  
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
        Yelp.addEventListener('ended', function() {
            Yelp.play();
        }, false);  
    }
}

function ToggleYelp() {
    if (toggle == true && YelpTekan == false) {
        stopAudio(Wail)
        WailTekan = false;
        stopAudio(Phaser)
        PhaserTekan = false;
        YelpTekan = true
        Yelp.play();
        Yelp.addEventListener('ended', function() {
            Yelp.play();
        }, false);  
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
    Phaser.addEventListener('ended', function() {
        Phaser.play();
    }, false);    
}

function TogglePhaser() {
    if (toggle == true && PhaserTekan == false) {
        stopAudio(Wail)
        WailTekan = false
        stopAudio(Yelp)
        YelpTekan = false
        PhaserTekan = true
        Phaser.play();
        Phaser.addEventListener('ended', function() {
            Phaser.play();
        }, false);  
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
    HighLow.addEventListener('ended', function() {
        HighLow.play();
    }, false);    
}

var HighLowTekan = false

function ToggleHighLow() {
    if (toggle == true && HighLowTekan == false) {
        HighLowTekan = true
        stopAudio(Wail)
        WailTekan = false;
        stopAudio(Yelp)
        YelpTekan = false;
        stopAudio(Phaser)
        PhaserTekan = 0;
        HighLow.play();
        HighLow.addEventListener('timeupdate', function(){
            var bufferHighLow = .24
            if(this.currentTime > this.duration - bufferHighLow){
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

// HORN
Horn.loop = true

function HoldHorn() {
    Horn.play();
    Wail.pause();
    Yelp.pause();
    Phaser.pause();
}

function StopHorn() {
    stopAudio(Horn);
    if (WailTekan == true) {
        Wail.play()
    } else if (YelpTekan == true) {
        Yelp.play()
    } else if (PhaserTekan == true) {
        Phaser.play()
    }
}