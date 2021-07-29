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

function retDay(a){
    if(a == 0) return "Sun";
    else if(a == 1) return "Mon";
    else if(a == 2) return "Tue";
    else if(a == 3) return "Wed";
    else if(a == 4) return "Thu";
    else if(a == 5) return "Fri";
    else if(a == 6) return "Sat";
}
let b = new Date();
let strD = retDay(b.getDay()) + ` ${b.getDate()}/${b.getMonth()+1}/${b.getFullYear()}`;
document.getElementById("daydate").innerHTML = strD;
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

