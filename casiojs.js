function giveTime(){
    const a = new Date()
    str = `${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`;
    document.getElementById("time").innerHTML = str;
}
setInterval(giveTime, 1000);

