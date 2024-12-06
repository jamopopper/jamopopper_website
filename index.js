var yapper = document.getElementById("yapping_man");
var yapper_tail = document.getElementById("whoosh");
var yap_text = document.getElementsByClassName("speech_bubble")[0];

var yap_box = null;
if (yap_text == undefined) {
    console.log("yap_text is undefined")
} else {
    yap_box = yap_text.childNodes[1]
}
let yap_array = ["That tickles!", "Don't do that!", "I'm not an icon!", "Whoops!", "Hey there!", "Hehe!"];
var last_timeout;
var a = Math.floor(Math.random()*750 + 750);

move_yapper = function() {
    console.log("moving yapper");
    if (window.innerHeight / window.innerWidth > 4/3) {
        yapper.style.bottom = "20%";
        yapper_tail.style.bottom = "20%";
        if (yap_text != undefined) yap_text.style.bottom = "35%";
    } else {
        yapper.style.bottom = "calc(20% + " + 
        (((window.innerHeight / window.innerWidth) - 4/3) * (-10)).toString() + "vw)";
        yapper_tail.style.bottom = "calc(20% + " + 
        (((window.innerHeight / window.innerWidth) - 4/3) * (-10)).toString() + "vw)";
        if (yap_text != undefined) yap_text.style.bottom = "calc(35% + " + 
        (((window.innerHeight / window.innerWidth) - 4/3) * (-25)).toString() + "vw)";
    }
}


talking_start = function() {
    console.log("yapper yapping normally");
    yapper.src = "images/yapping.png";
    yap_text.style.display = "block";
    yap_box.textContent = "Hello!";

    last_timeout = setTimeout(function() {
        console.log("yapper yapping normally 2");
        yap_box.textContent = "Click or tap on the icons below to see what I'm up to!";
        last_timeout = setTimeout(talking_end, 4000);
    }, 2000);
};

talking_end = function() {
    console.log("yapper stopped yapping");
    yapper.src = "images/silent.png";
    yap_text.style.display = "none";
    yap_box.textContent = "";

    a = Math.floor(Math.random()*10000 + 10000);
    last_timeout = setTimeout(talking_start,a);
};

interrupt_yapping = function() {
    console.log("yapper interrupted");
    if (yap_text == undefined) {
        console.log("yap_text is undefined")
        return;
    }
    clearTimeout(last_timeout);
    if (yapper.src.includes("silent.png")) {
        console.log("yapper was silent");
        yapper.src = "images/yapping.png"
    }
    yap_text.style.display = "block";
    yap_box.textContent = yap_array[Math.floor(Math.random() * yap_array.length)];
    last_timeout = setTimeout(talking_end, 2000);
}

move_yapper();
if (yap_text != undefined) {
    console.log("yap_text is defined");
    last_timeout = setTimeout(talking_start,a);
}

document.body.style.transform = 'translateZ(0)';
setTimeout(() => {
    document.body.style.transform = '';
}, 0);


window.addEventListener("resize", move_yapper)
