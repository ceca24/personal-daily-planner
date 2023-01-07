//this is used to display the date at the top of the screen
var currentDate = moment().format("dddd, MMM Do, YYYY");
  $("#currentDay").text(currentDate);

//this is used to check the local time to color code the blocks of time
var currentTime = moment().hour();


  //function to colorcode the time blocks
  $(".time-block").each(function () {
    var schedulingTime = $(this).attr("id");
   
 
    if (schedulingTime < currentTime) {
      $(this).children("textarea").addClass("past");
    } else if (schedulingTime == currentTime) {
      $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });

  //this sets a variable for the time blocks using Jquery
  var hours = $(".time-block")

  $(document).ready(function () {
    $(".saveBtn").on("click", function () {
      
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    })});

//this click event is to store the item in local storage 
$(".saveBtn").on("click", function () {
  
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
});