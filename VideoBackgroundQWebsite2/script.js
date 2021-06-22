var backVideo = document.getElementById('backVideo');
var playBtn = document.getElementById('playBtn');
var icon = document.getElementById('icon');

playBtn.onclick = function() {
    backVideo.style.display = "block";

    if(backVideo.paused) {
        backVideo.play();
        icon.src = "/img/pause.png";
    }
    else{
        backVideo.pause();
        icon.src = "/img/play.png";
    }
}
