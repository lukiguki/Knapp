 function move() {
     var random = Math.random() * 700 + "px";
     var rondom = Math.random() * 200 + "px";
     var rondim = Math.random() * 200 + "px";
     var randam = Math.random() * 75 + "px";
     var randim = Math.random() * 75 + "px";
     var rondam = Math.random() * 1000 + "px";

     document.getElementById("btn").style.marginTop = random;
     document.getElementById("btn").style.marginLeft = rondam;
     document.getElementById("btn").style.paddingLeft = rondom;
     document.getElementById("btn").style.paddingRight = rondim;
     document.getElementById("btn").style.paddingBottom = randam;
     document.getElementById("btn").style.paddingTop = randim;
 }

function change(){
    var vid = document.createElement("VIDEO");
    
    if(vid.canPlayType("video/mp4")){
        vid.setAttribute("src","Rick.mp4");
    }
    else{
        vid.setAttribute("src","Rick.mp4");
    }
    
    vid.setAttribute("autoplay", "autoplay");
    document.body.appendChild(vid);
}
