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





