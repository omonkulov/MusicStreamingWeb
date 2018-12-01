var manifest = {
    queueSong : [],
    playingTackInfo : {
        artist: "DEFAULT, TEST",
        title: "DEFAULT, TEST",
        url: "DEFAULT, TEST",
        length: 274,
        prevTrack: 0,
        currentTimeSong : 0,
        tracksPlayed: []
    }
}


/* VARIABLE DECLIRATION */


/*BottomBar
    ALL bottom bar stuff
*/

var barDiv = document.getElementById("bar");
var progress = document.getElementById("redPart");
var xUser = 0; //X position of user clicked on BAR div for seek


/*Update Audio Bar when song loads */
var seconds = 0;
var minutes = 0;

/*Audio controls aduio.js */
var trackNum = 0;
var duration = 0;
var audio = document.getElementById("audio");
var currentTimes=0;


/*Functions to update manifiest object */
function infoUpDate(){
    manifest.playingTackInfo.artist = artists[trackNum].artist;
    manifest.playingTackInfo.title = artists[trackNum].title;
    manifest.playingTackInfo.url = artists[trackNum].url;
    manifest.playingTackInfo.length = duration;
    manifest.playingTackInfo.prevTrack = trackNum;
    if(!(trackNum in manifest.playingTackInfo.tracksPlayed)){
        manifest.playingTackInfo.tracksPlayed.push(trackNum);
    }
   // console.log(manifest);
}

   


