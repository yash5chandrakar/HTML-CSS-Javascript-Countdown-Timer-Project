var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");


var bday = "5 Sep 2022";
var flag = false;
function edit() {
    document.getElementById("name2").innerHTML = document.getElementById("name1").value;
    bday = document.getElementById("age").value;
    flag = false;
}

function reset() {
    flag = true;
    document.getElementById("name1").value = "";
    document.getElementById("age").value = "";
}

function count() {
    if (flag == true) {
        days.innerHTML = "0";
        hours.innerHTML = "0";
        minutes.innerHTML = "0";
        seconds.innerHTML = "0";
        document.getElementById("name2").innerHTML = "";

    }
    else {
        const bdayy = new Date(bday);
        const current = new Date();

        const total = (bdayy - current) / 1000;
        const Days = Math.floor(total / 3600 / 24);
        const Hours = Math.floor(total / 3600) % 24;
        const Minutes = Math.floor(total / 60) % 60;
        const Seconds = Math.floor(total) % 60;
        days.innerHTML = Days;
        hours.innerHTML = Hours;
        minutes.innerHTML = Minutes;
        seconds.innerHTML = Seconds;
    }
}

var z = 1;
function bordertoggle() {
    z++
    if (z % 2 == 0) {
        document.getElementById("mainbox").style.border = "0px";
    }
    else {
        document.getElementById("mainbox").style.border = "solid 5px bisque";
    }
}

var x = 0;
function show() {
    x++
    if (x % 2 == 0) {
        document.getElementById("input").style.display = "none";
        document.getElementById("hide").innerHTML = "Show";
    }
    else {
        document.getElementById("input").style.display = "block";
        document.getElementById("hide").innerHTML = "Hide";
    }
}
count();
setInterval(count, 1000);
flag = true;






