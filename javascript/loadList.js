console.log("loadList.js started!");
let path = "../Artists/ozodbek.json";


$.getJSON(path, function(json){
    if(json != null){
        console.log(json);
        
    }
});



for(let i=0; i < 20; i++){
    let newDiv = document.createElement("div");
    //newDiv.appendChild(document.createTextNode("Test"));
    document.getElementById("songsList").appendChild(newDiv);
    console.log("test");
}