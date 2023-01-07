//this is used to display the date at the top of the screen
var currentDate = moment().format("dddd, MMM Do, YYYY");
  $("#currentDay").text(currentDate);

//this is used to check the local time to color code the blocks of time
var currentTime = moment().hour();


//this overlying function is to run the program every minute to keep it updated.
function updateTime() {

  //this function is to colorcode the time blocks
  $(".time-block").each(function () {
    var schedulerTime = $(this).attr("id");
   

    if (schedulerTime < currentTime) {
      $(this).children("textarea").addClass("past");
    } else if (scheduleTime == currentTime) {
      $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });

  //this sets a variable for the time blocks using Jquery
  var hours = $(".time-block")

  //this for loop to cycle through the time blocks
  for (let index = 0; index < hours.length; index++) {
    const element = hours[index];

    //these line of codes grab the item set in local storage
    var timeId = $(element).attr("id");
    var timeValue = localStorage.getItem(timeId);
    if (timeValue)
      $(element).children(".description").val(timeValue)
  }
  

}
//this is to call the function to run the program every minute
updateTime()
setInterval(updateTime, 60000)

//this click event is to store the item in local storage 
$(".saveBtn").on("click", function () {
  
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
});