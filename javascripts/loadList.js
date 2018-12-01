let progressHeight = document.getElementById("progressBAR").clientHeight;
let contentDiv = document.getElementById("contentDiv");

contentDiv.clientHeight = screen.height - progressHeight;

for(let i =0; i < artists.length; i++){
    let listNode = document.createElement("div");
    listNode.className = "Item";
    listNode.setAttribute("onclick", 'playMeFromList('+i+')');
    let pTagList = document.createElement("p");
    listNode.className = "ItemText";
    pTagList.appendChild(document.createTextNode(artists[i].title));
    listNode.appendChild(pTagList);
    contentDiv.appendChild(listNode);
    if(i+1 == artists.length){
        contentDiv.appendChild(document.createElement("br"));
        contentDiv.appendChild(document.createElement("br"));
    }   
}


function playMeFromList(num = 0){
    currentTimes = 0;
    audio.currentTime = 0;
    songPause();
    trackNum = num;
    songPlay();
    infoUpDate();
    document.getElementById("playButton").innerHTML = "pause";
}
