const time = document.getElementById("time")
const daydate = document.getElementById("daydate")
const f24 = document.getElementById("f24")
const f12 = document.getElementById("f12")
const checkBox = document.getElementById('checkbox')

const twoDigs = (num)=>{
    return num.toLocaleString('en-US',{
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}

const giveTime = (f)=>{
    const a = new Date()
    if (f == 24) {
        strTime = `${twoDigs(a.getHours())}:${twoDigs(a.getMinutes())}:${twoDigs(a.getSeconds())}`;
        time.innerHTML = strTime;
    }
    else if (f == 12) {
        let h = a.getHours();
        if(h >= 12) ap = "PM";
        else ap = "AM";
        if (h > 12) h -= 12;
        else if (h == 0) h = 12;
        strTime = `${twoDigs(h)}:${twoDigs(a.getMinutes())}:${twoDigs(a.getSeconds())} ${ap}`;
        time.innerHTML = strTime;
    }
}

const retDay = (a)=>{
    if(a == 0) return "Sun";
    else if(a == 1) return "Mon";
    else if(a == 2) return "Tue";
    else if(a == 3) return "Wed";
    else if(a == 4) return "Thu";
    else if(a == 5) return "Fri";
    else if(a == 6) return "Sat";
}

let b = new Date();
let strD = retDay(b.getDay()) + ` ${twoDigs(b.getDate())}/${twoDigs(b.getMonth()+1)}/${b.getFullYear()}`;
daydate.innerHTML = strD;
giveTime(24);
let run = setInterval(giveTime, 1000, 24), curr = 24;

checkBox.addEventListener('change', ()=>{
    if(curr == 24){
        clearInterval(run)
        if(innerWidth <= 768){
            time.style.fontSize = '60px'
        }
        curr = 12
        giveTime(12);
        run = setInterval(giveTime, 1000, 12);
    }
    else{
        clearInterval(run)
        if(innerWidth <= 768){
            time.style.fontSize = '75x'
        }
        curr = 24
        giveTime(24);
        run = setInterval(giveTime, 1000, 24);
    }
})
