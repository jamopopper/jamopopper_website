var yapper = document.getElementById("yapping_man");
var yap_text = document.getElementsByClassName("speech_bubble")[0];
var yap_box = yap_text.childNodes[0];
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

talking = function() {
    console.log("starting talking");
    yapper.src = "images/yapping.png";
    yap_text.style.display = "block";
    yap_box.textContent = "Hello!! Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nisi, Quo Quisquam! Labore, Quae Quia?";
    console.log("talking on");
    setTimeout(function() {
        console.log("stopping talking");
        yapper.src = "images/silent.png";
        yap_text.style.display = "none";
        yap_box.textContent = "";
        console.log("talking off");
    }, 6000);
    a = Math.floor(Math.random()*10000 + 10000);
    setTimeout(talking,a);
    console.log("queue created");
};

move_yapper();
setTimeout(talking,a)

window.addEventListener("resize", move_yapper)