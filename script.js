var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(now);
console.log(now)

$(document).ready(function() {    
    function trackTime() {
        var currentTime = moment().hour();
        console.log(currentTime)
    }
    trackTime();
})