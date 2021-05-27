var slideImg = document.getElementById('slideImg');

var images = new Array(
    "/lobby.jpg",
    "/lobby2.jpg",
    "/lobby3.jpg",
    "/lobby4.jpg",
    "/lobby5.jpg",
    "/lobby6.jpg",
    "/lobby7.jpg",
    "/lobby8.jpg",
    "/lobby9.jpg",
    "/lobby10.jpg",
    "/lobby11.jpg"
);

var len = images.length;
var i = 0;

function slider() {
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}