function giveTime(f) {
    const a = new Date()
    if (f == 24) {
        str = `${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`;
        document.getElementById("time").innerHTML = str;
    }
    else if (f == 12) {
        let h = a.getHours();
        if(h >= 12) ap = "PM";
        else ap = "AM";
        if (h > 12) h -= 12;
        else if (h == 0) h = 12;
        str = `${h}:${a.getMinutes()}:${a.getSeconds()} ${ap}`;
        document.getElementById("time").innerHTML = str;
    }
}
giveTime(24);
run = setInterval(giveTime, 1000, 24);

let prev = " ";
function selectForm(id) {
    if (id != prev) {
        document.getElementById(id).style.cssText = `
    background-color: #14ff62;
    color: black;
  `;
        if (id == "f12") {
            clearInterval(run);
            prev = "f12";
            giveTime(12);
            run = setInterval(giveTime, 1000, 12);
            document.getElementById("f24").style.cssText = `
    background-color: black;
    color: #14ff62;
  `;
        }
        else {
            clearInterval(run);
            prev = "f24";
            giveTime(24);
            run = setInterval(giveTime, 1000, 24);
            document.getElementById("f12").style.cssText = `
    background-color: black;
    color: #14ff62;
    `;
        }
    }
}

