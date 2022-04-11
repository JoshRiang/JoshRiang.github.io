var Wail = new Audio('https://github.com/JoshRiang/SirenWebsite/raw/main/audio/SIREN_1.mp3');
var Yelp = new Audio('https://github.com/JoshRiang/SirenWebsite/raw/main/audio/SIREN_2.mp3');
var Phaser = new Audio('https://github.com/JoshRiang/SirenWebsite/raw/main/audio/POLICE_WARNING.mp3');
var Horn = new Audio('https://github.com/JoshRiang/SirenWebsite/raw/main/audio/AIRHORN_EQD.mp3');
var HighLow = new Audio('https://github.com/JoshRiang/SirenWebsite/raw/main/audio/AMBULANCE_WARNING.mp3');

function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
};

function HoldWail() {
    Wail.play();
    Wail.addEventListener('ended', function() {
        Wail.play();
    }, false);    
};

function StopWail() {
    stopAudio(Wail);
}

function HoldYelp() {
    Yelp.play();
    Yelp.addEventListener('ended', function() {
        Yelp.play();
    }, false);    
}

function StopYelp() {
    stopAudio(Yelp);
}

function HoldPhaser() {
    Phaser.play();
    Phaser.addEventListener('ended', function() {
        Phaser.play();
    }, false);    
}

function StopPhaser() {
    stopAudio(Phaser);
}

function HoldHorn() {
    Horn.play();
    Horn.addEventListener('ended', function() {
        Horn.play();
    }, false);    
}

function StopHorn() {
    stopAudio(Horn);
}

function HoldHighLow() {
    HighLow.play();
    HighLow.addEventListener('ended', function() {
        HighLow.play();
    }, false);    
}

function StopHighLow() {
    stopAudio(HighLow);
}