//Using let and const because I'd like to get into this habit, and we learned this in class not too long ago.
let now = moment().format("h a , dddd , MMMM Do YYYY");
$("#currentDay").html(now);
console.log(now);

let currentTime = moment().hour();
console.log(currentTime)



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
       if (currentTime > 11) {
        $("#color11").addClass("past")
       } else if (currentTime >= 11 && currentTime < 12) {
        $("#color11").addClass("present")
       } else if (currentTime < 11) {
        $("#color11").addClass("future")
       }
       if (currentTime > 12) {
        $("#color12").addClass("past")
       } else if (currentTime >= 12 && currentTime < 13) {
        $("#color12").addClass("present")
       } else if (currentTime < 12) {
        $("#color12").addClass("future")
       }
       if (currentTime > 13) {
        $("#color13").addClass("past")
       } else if (currentTime >= 13 && currentTime < 14) {
        $("#color13").addClass("present")
       } else if (currentTime < 13) {
        $("#color13").addClass("future")
       }
       if (currentTime > 14) {
        $("#color14").addClass("past")
       } else if (currentTime >= 14 && currentTime < 15) {
        $("#color14").addClass("present")
       } else if (currentTime < 14) {
        $("#color14").addClass("future")
       }
       if (currentTime > 15) {
        $("#color15").addClass("past")
       } else if (currentTime >= 15 && currentTime < 16) {
        $("#color15").addClass("present")
       } else if (currentTime < 15) {
        $("#color15").addClass("future")
       }
       if (currentTime > 16) {
        $("#color16").addClass("past")
       } else if (currentTime >= 16 && currentTime < 17) {
        $("#color16").addClass("present")
       } else if (currentTime < 16) {
        $("#color16").addClass("future")
       }
       if (currentTime > 17) {
        $("#color17").addClass("past")
       } else if (currentTime >= 17 && currentTime < 18) {
        $("#color17").addClass("present")
       } else if (currentTime < 17) {
        $("#color17").addClass("future")
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
            
            