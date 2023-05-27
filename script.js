let x = 0;
let y = 0;
let xr = false;
let yr = false;
let xm;
let ym;
function loop() {
    calcborders();
    if (!xr) {
        x++;
    } else {
        x--;
    }
    if (!yr) {
        y++;
    } else {
        y--;
    }
    if (x == 0) {
        xr = false;
    } else if (x == xm) {
        xr = true;
    }
    if (y == 0) {
        yr = false;
    } else if (y == ym) {
        yr = true;
    }
    document.getElementById("dvd").style.bottom = y;
    document.getElementById("dvd").style.left = x;
    if ((x == 0 || x == xm) && (y == 0 || y == ym)) {
        document.getElementById("body").style.border = "3px solid #FFFFFF";
        setTimeout(function () {
            document.getElementById("body").style.border = "none";
        }, 200);
    }
}
function calcborders() {
    xm = document.getElementById("body").offsetWidth - document.getElementById("dvd").offsetWidth;
    ym = document.getElementById("body").offsetHeight - document.getElementById("dvd").offsetHeight;
    if (x > xm || y > ym || y < 0 || x < 0) {
        x = 0;
        y = 0;
        xr = false;
        yr = false;
    }
}
function runscript() {
    setInterval(loop, 10);
}