var images = [
    "./img/a9ceec.png",
    "./img/ffef6c.png",
    "./img/010066.png"
]
var pageNum = 0;

function setImage() {
    var img = document.getElementById('image');
    img.src = images[pageNum];
}

function next() {
    if (pageNum == images.length - 1) {
        pageNum = 0;
    } else {
        pageNum++;
    }

    setImage();
}

var nextBtn = document.getElementById('nextBtn');
nextBtn.onclick = next;

function previous() {
    if (pageNum == 0) {
        pageNum = images.length - 1;
    } else {
        pageNum--;
    }

    setImage();
}

var previousBtn = document.getElementById('previousBtn');
previousBtn.onclick = previous;