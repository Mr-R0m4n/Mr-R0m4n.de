function updateClock(){
    var now = new Date();
    var hou = now.getHours(),
        min = now.getMinutes(),
        dname = now.getDay(),
        dnum = now.getDate(),
        mon = now.getMonth(),
        yr = now.getFullYear();
    
    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 +n);
        return n;
    }
    
    var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    var week = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
    var ids = ["hour", "minute", "dayname", "daynum", "month", "year"];
    var values = [hou.pad(2), min.pad(2), week[dname], dnum.pad(2), months[mon], yr];

    for(var i = 0; i < ids.length; i++){
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function initClock(){
    updateClock;
    window.setInterval("updateClock()", 1);
}

$(document).ready(function(){
    $("html").niceScroll({scrollspeed: '10'});
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(elem => {
        if (elem.isIntersecting) {
            $("#textfield").animate({ scrollTop: 0 }, 1);
        }
    });
});

function toTop(){
document.querySelectorAll('section').forEach(elem => observer.observe(elem));
}

function rotate(){
const card = document.querySelector(".card");
const cardBack = document.querySelector(".cardBack");
const container = document.querySelector(".container");

//Moving Animation
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    cardBack.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    cardBack.style.transition = `all 0.5s ease`;
    cardBack.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = `none`;
    cardBack.style.transition = `none`;
});
}