

var images = ["first.jpg", "second.jpg", "third.jpg"]

var change = document.getElementById("banners");
function bannersInit(index) {
    change.innerHTML = `<img class="banner" src="./images/${images[index]}"/>`
}
var count = 0;
setInterval(function () {
    if (images.length === count) {
        count = 0
    }
    bannersInit(count++)
}, 5000)