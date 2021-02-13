//Using let and const because I'd like to get into this habit, and we learned this in class not too long ago.
var now = moment().format("h a,dddd, MMMM Do YYYY");
$("#currentDay").html(now);
console.log(now);

$(document).ready(function() {    
    function trackTime() {
        var currentTime = moment().hour();
        console.log(currentTime)
    }
    trackTime();
});

var localStorageTasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": [],
};

function localStorageAdd() {
    localStorage.setItem("tasks", JSON.stringify(localStorageTasks))
};

function localStorageGet() {
    let getTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(getTasks)
};
