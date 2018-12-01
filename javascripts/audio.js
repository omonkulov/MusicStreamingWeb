"use strict";
function songPlay() {
    audio.src = artists[trackNum].url;
    if (currentTimes > 0) {
        audio.play();
        audio.currentTime = currentTimes;
    } else { 
        audio.play();
    }
    audio.addEventListener('loadedmetadata', () => {
        duration = audio.duration;
        updateBar();
    });
    infoUpDate();
}

function songPause() {
    audio.pause();
    currentTimes = audio.currentTime;
}

function nextSong() {
    document.getElementById("playButton").innerHTML = "pause";
    currentTimes = 0;
    audio.currentTime = 0;
    songPause();
    trackNum++;
    songPlay();
    infoUpDate();
}

function prevSong() {
    document.getElementById("playButton").innerHTML = "pause";
    currentTimes = 0;
    audio.currentTime = 0;
    songPause();
    if (trackNum > 0) {
        trackNum--;
        audio.src = artists[trackNum].url;
        songPlay();
        infoUpDate();
    }
}

audio.addEventListener("ended", function(){
    audio.currentTime = 0;
    currentTimes = 0;
    audio.pause();
    trackNum++;
    songPlay();
    console.log("ended");
});