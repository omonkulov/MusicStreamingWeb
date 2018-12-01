
/**
 * Omonkulov Sardorbek
 * 
 * .volumeBar
 * 
 * TODO:
 *  For now I just replcated progeress.js
 *  Later in time, you need to have one function that detects 
 *  which bar user clicked and change the "RED PART" accordingly
 * 
 * 
 */

 "use strict";

let wholeVolumeDiv = "volumeBar";
let volumeRedPart = "volumeRedPart";
let vtext = "volumeText";

let wholeElem = document.getElementById(wholeVolumeDiv);
let redPart = document.getElementById(volumeRedPart);
let text = document.getElementById(vtext);

if(wholeElem){
    wholeElem.addEventListener("click", changeBar, false);
}else{
    console.log("JavaScript failed to find barButton! Report to Owner PLZ");
}

function changeBar(e) {
    let startPosition = wholeElem.getBoundingClientRect().left;
    let endPosition = wholeElem.getBoundingClientRect().right;
    let xUser = e.clientX;
    let percentage = 0;

    endPosition -= startPosition;
    xUser -= startPosition;

    percentage = Math.ceil((xUser/endPosition)*100);

    redPart.style.width = percentage+"%";
    text.innerHTML = "Volume: "+ percentage+"%";
}

function changeTime(time){
    console.log(duration);
    time = Math.floor((time/100)* duration);
    audio.currentTime = time;

    console.log(time);
    audio.play();
}