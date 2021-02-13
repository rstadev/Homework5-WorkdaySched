//Using let and const because I'd like to get into this habit, and we learned this in class not too long ago.
let now = moment().format("h a , dddd , MMMM Do YYYY");
$("#currentDay").html(now);
console.log(now);
//cleaned this up. Leaving green text as a reminder if this ends up breaking code later.
// $(document).ready(function() {    
    // function trackTime() {
let currentTime = moment().hour();
console.log(currentTime)
//     }
//     trackTime();
// });




$(document).ready(function(){
    $(".saveBtn").click(function(){
        const timeVal = $(this).parent().attr("id");
        const textVal = $(this).siblings().children(".description").val();
        console.log(timeVal)
        console.log(textVal)
        
        localStorage.setItem(timeVal, textVal)
        
        });
    });
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    
   function colorAssign() {
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
       if (currentTime > 10) {
        $("#color10").addClass("past")
       } else if (currentTime >= 10 && currentTime < 11) {
        $("#color10").addClass("present")
       } else if (currentTime < 10) {
        $("#color10").addClass("future")
       }
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
       if (currentTime > 9) {
        $("#color9").addClass("past")
       } else if (currentTime >= 9 && currentTime < 10) {
        $("#color9").addClass("present")
       } else if (currentTime < 9) {
        $("#color9").addClass("future")
       }
   }
   colorAssign();
// function colorAssign() {
    //     switch (id = currentTime) {
       //         case ""
            
      //     }
     // }
 //TO DO: Figure out how this would work as a different approach.
// var localStorageTasks = {
    //     "9": [],
    //     "10": [],
    //     "11": [],
    //     "12": [],
    //     "13": [],
    //     "14": [],
    //     "15": [],
    //     "16": [],
    //     "17": [],
    // };
// localStorage.setItem("tasks", JSON.stringify(localStorageTasks))
// function localStorageGet() {
//     let getTasks = JSON.parse(localStorage.getItem("tasks"));
//     console.log(getTasks)
// };
// localStorageGet();
// if (timeVal = 9){
            //     console.log("trigger working!")
            //     const changeTasks = textVal
            //     JSON.parse(localStorage.getItem("tasks"))
            //     // localStorage.setItem("tasks", JSON.stringify(localStorageTasks))
            // }
            
            