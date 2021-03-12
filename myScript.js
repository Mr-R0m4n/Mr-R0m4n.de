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

//Moving Animation
document.querySelectorAll(".card").forEach(item=> { item.addEventListener("touchmove", (e) => {
    var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
    var touch = evt.touches[0] || evt.changedTouches[0];
    let xAxis = (-(window.innerWidth / 2 - touch.clientX) / 10);
    let yAxis = (-(window.innerHeight / 2 - touch.clientY) / 10);
    item.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    e.preventDefault();
    $('#cardContainer').css({overflow: 'hidden'});
});
});

//Animate Out
document.querySelectorAll(".card").forEach(item=> { item.addEventListener("touchend", (e) => {
    item.style.transition = `all 0.5s ease`;
    item.style.transform = `rotateY(0deg) rotateX(0deg)`;
    $('#cardContainer').css({overflowY: 'scroll'});
});
});

//Animate In
document.querySelectorAll(".card").forEach(item=> { item.addEventListener("touchmove", (e) => {
    item.style.transition = `none`;
}); 
});
};