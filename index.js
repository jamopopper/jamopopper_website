var yapper = document.getElementById("yapping_man");
var yap_text = document.getElementsByClassName("speech_bubble")[0];
var yap_box = yap_text.childNodes[1];
var a = Math.floor(Math.random()*750 + 750);

move_yapper = function() {
    console.log("moving yapper");
    if (window.innerHeight / window.innerWidth > 4/3) {
        yapper.style.bottom = "20%";
        yap_text.style.bottom = "35%";
    } else {
        yapper.style.bottom = "calc(20% + " + 
        (((window.innerHeight / window.innerWidth) - 4/3) * (-10)).toString() + "vw)";
        yap_text.style.bottom = "calc(35% + " + 
        (((window.innerHeight / window.innerWidth) - 4/3) * (-25)).toString() + "vw)";
    }
}


talking_start = function() {
    yapper.src = "images/yapping.png";
    yap_text.style.display = "block";
    yap_box.textContent = "Hello!";
    setTimeout(function() {
        yap_box.textContent = "Click or tap on the icons below to see what I'm up to!";
        setTimeout(talking_end, 4000);
    }, 2000);
};

talking_end = function() {
    console.log("stopping talking");
    yapper.src = "images/silent.png";
    yap_text.style.display = "none";
    yap_box.textContent = "";
    console.log("talking off");
    a = Math.floor(Math.random()*10000 + 10000);
    setTimeout(talking_start,a);
    console.log("queue created");
};

move_yapper();
setTimeout(talking_start,a)

window.addEventListener("resize", move_yapper)