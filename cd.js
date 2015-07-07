function countdown(end) {
    var DAYS = 1000 * 60 * 60 * 24;
    var HOURS = DAYS / 24;
    var MINUTES = HOURS / 60;
    var SECONDS = MINUTES / 60;

    var remain = (end - new Date);
    var days = Math.floor(remain / DAYS); remain %= DAYS;
    var hours = Math.floor(remain / HOURS); remain %= HOURS;
    var minutes = Math.floor(remain / MINUTES); remain %= MINUTES;
    var seconds = Math.floor(remain / SECONDS); remain %= SECONDS;

    return new Array(days, hours, minutes, seconds);
}
function updateCount(end, da, ho, mi, se) {
    var cd = countdown(end);

    da.innerHTML = cd[0] + (cd[0] == 1 ? " day"    : " : ");
    ho.innerHTML = cd[1] + (cd[1] == 1 ? " hour"   : " : ");
    mi.innerHTML = cd[2] + (cd[2] == 1 ? " minute" : " : ");
    se.innerHTML = cd[3] + (cd[3] == 1 ? " second" : "  ");


}
function startCount(end, da, ho, mi, se) {
    updateCount(end, da, ho, mi, se);
    setInterval( function() { updateCount(end, da, ho, mi, se); }, 1000 );
}

/* JS for Event Name #2 */

CountDownTimer('July 24, 2015', 'countdown');

function CountDownTimer(date, id) {
    var end       = new Date(date);
    
    var second   = 1000;
    var minute   = second * 60;
    var hour     = minute * 60;
    var day      = hour * 24;
    var timer;
    
    var updateCount2 = function() {
        var now = new Date();
        var cd = countdown(end);
        var cd = end - now;

        if (cd < 0) {   
            clearInterval(countd);
            document.getElementById(id).innerHTML = 'July 24 is here :(';
            return;
        }

        var days = Math.floor(cd / day);
        var hours = Math.floor((cd % day) / hour);
        var minutes = Math.floor((cd % hour) / minute);
        var seconds = Math.floor((cd % minute) / second);
        
        document.getElementById(id).innerHTML = days + ' : ';
        document.getElementById(id).innerHTML += hours + ' : ';
        document.getElementById(id).innerHTML += minutes + ' : ';
        document.getElementById(id).innerHTML += seconds + ' ';
    };
    
    countd = setInterval(updateCount2, 1000);
}