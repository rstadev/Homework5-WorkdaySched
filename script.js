//Using let and const because I'd like to get into this habit, and we learned this in class not too long ago.
var now = moment().format("h a , dddd , MMMM Do YYYY");
$("#currentDay").html(now);
console.log(now);

// $(document).ready(function() {    
    // function trackTime() {
let currentTime = moment().hour();
    console.log(currentTime)
//     }
//     trackTime();
// });

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
localStorageAdd();

function localStorageGet() {
    let getTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(getTasks)
};
localStorageGet();

$(document).ready(function(){
    $(".saveBtn").click(function(){
        let timeVal = $(this).siblings().attr("id");
        let textVal = $(".description").val();
        console.log(timeVal)
        console.log(textVal)
    });
});
// function colorAssign() {
//     switch (id = currentTime) {
//         case ""

//     }
// }


// function getTextArea() {
//     $(document).ready(function() {
//         let textVal = $.trim($("#9").val());
//         console.log(textVal)
//     })
// };
// getTextArea();