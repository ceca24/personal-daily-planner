// a variable made to display the date at the top of the screen
var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMM Do, YYYY"));

// a variable to check the local time to color code the blocks of time
var currentTime = moment().hour();


// overlying function to run the program every minute to keep it updated.
function updateTime() {

  // function to color-code the time blocks
  $(".time-block").each(function () {
    var scheduleTime = $(this).attr("id");
   

    if (scheduleTime < currentTime) {
      $(this).children("textarea").addClass("past");
    } else if (scheduleTime == currentTime) {
      $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");
    }
  });

  // setting a variable for the time blocks using Jquery
  var timeBlocks = $(".time-block")

  // for loop to cycle through the time blocks
  for (let index = 0; index < timeBlocks.length; index++) {
    const element = timeBlocks[index];

    // grabbing the item set in local storage using the key
    var timeId = $(element).attr("id");
    var timeValue = localStorage.getItem(timeId);
    if (timeValue)
      $(element).children(".description").val(timeValue)
  }
  

}
// calling the function to run the program every minute
updateTime()
setInterval(updateTime, 60000)

// click event to store the item in local storage 
$(".saveBtn").on("click", function () {
  
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value);
});