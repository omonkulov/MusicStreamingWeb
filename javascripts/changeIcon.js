"use strict";

function changeIcon(elem){
    if(elem.innerHTML == "play_arrow"){
        elem.innerHTML = "pause";
        songPlay();
        return 0;
    }else{
        songPause();
        elem.innerHTML = "play_arrow";
        return 0;
    }
    
    
}