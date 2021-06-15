var images = [
    "./img/a9ceec.png",
    "./img/ffef6c.png",
    "./img/010066.png"
]
var pageNum = 0;

function next() {
    var img = document.getElementById('image');

    if (pageNum == images.length - 1) {
        pageNum = 0;
    } else {
        pageNum++;
    }

    img.src = images[pageNum];
}

function previous() {
    var img = document.getElementById('image');

    if (pageNum == 0) {
        pageNum = images.length - 1;
    } else {
        pageNum--;
    }

    img.src = images[pageNum];
}