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

function hideAdressBar(){
    window.scrollTo(0,1);
}