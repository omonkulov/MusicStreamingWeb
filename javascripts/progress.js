

/**
 * Omonkulov Sardorbek
 * 
 * .progressBar
 * 
 * This script allows progress bar to function.
 * What it does:
 *  1) gets where user clicked along the X axis on .barbutton div
 *  2) gets where the .barButton div starts and ends
 *  3) calculates Wthe percentage of .barbutton was clicked
 *  4) changes the width of the "RED PART"(.redPart) accurding to the calculated percentage
 */

"use strict";

barDiv.addEventListener("click", getClickPosition, false);

function getClickPosition(e) {
    audio.pause();
    currentTimes = audio.currentTime;
    let startPosition = barDiv.getBoundingClientRect().left;
    let endPosition = barDiv.getBoundingClientRect().right;
    let xUser = e.clientX;
    let percentage = 0;

    endPosition -= startPosition;
    xUser -= startPosition;


    percentage = Math.ceil((xUser / endPosition) * 100);
    changeTime(percentage);

}

function updateBar(currentTimess = duration) {
    let minutes = Math.floor(Math.floor(currentTimess) / 60);
    let seconds = Math.floor((Math.floor(currentTimess) - minutes * 60) * 10) / 10;
    if (seconds <= 9) {
        seconds = "0" + seconds
    }
    if (duration == currentTimess) {
        document.getElementById("playingTitle").innerText = manifest.playingTackInfo.title;
        document.getElementById("duration").innerHTML = minutes + ":" + seconds;
    }else{
        document.getElementById("nowTime").innerHTML = minutes + ":" + seconds;
    }
}



audio.ontimeupdate = function () { setTimeout(updateBarLive, 500) };

function updateBarLive(time = 0) {
    //console.log(audio.currentTime);
    progress.style.width = (((Math.ceil(audio.currentTime) / duration) * 100)) + "%";
    updateBar(audio.currentTime);

}