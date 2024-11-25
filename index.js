var yapper = document.getElementById("yapping_man");
var a = Math.floor(Math.random()*750 + 750);

notify = function() {
    if (window.innerHeight / window.innerWidth > 4/3) {
        yapper.style.bottom = "20%";
    } else {
        yapper.style.bottom = "calc(20% + " + 
        (((window.innerHeight / window.innerWidth) - 4/3) * 5).toString() + "vw)";
    }
}

print = function() {
    yapper.src = "images/yapping.png";
    setTimeout(function() {
        yapper.src = "images/silent.png";
    }, 3500);
    a = Math.floor(Math.random()*10000 + 10000);
    setTimeout(print,a);
};

notify();
setTimeout(print,a)

window.addEventListener("resize", notify)