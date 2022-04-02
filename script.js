// var textBoxEl = $("past", "present", "future")
var hourInputEl = $("hourInput"); 
var saveBtn = $(".saveBtn");


//Current Day, Date, and Time
var today = (moment().format("dddd, MMMM Do YYYY"));
$("#currentDay").text(today);

$(document).ready(function () {
    $(".saveBtn").on("click", function() {
        var hour = $(this).parent().attr('id');
        var task = $(this).siblings(".task").val();
    
    localStorage.setItem(hour, task);
    })

    // Color change by time
    

})
// Save task input into local storage


function saveInput() {

}
function blockColor() {
    var time = moment().hours();
    // for loop $.each("ID NAME"), then added logic

    $(".time-block").each(function () {
        var presentHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(presentHour);

        if (presentHour < time) {
            $(this).addClass("past");
        } else if (presentHour === time) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present")
            $(this).addClass("future");
        }
    })
    }
// Save input in textbox
// var handleInputSave = function (event) {
//     event.preventDefault ();
//     var hourInput = hourInputEl.val();
//     printHourInput(hourInput);   
// }
// saveBtn.on("save", handleInputSave);




blockColor();



var interval = setInterval(blockColor, 1000);

  // load any saved data from localStorage
  $('#9 .task').val(localStorage.getItem('9'));
  console.log("#9".val);
  $('#10 .task').val(localStorage.getItem('10'));
  $('#11 .task').val(localStorage.getItem('11'));
  $('#12 .task').val(localStorage.getItem('12'));
  $('#13 .task').val(localStorage.getItem('13'));
  $('#14 .task').val(localStorage.getItem('14'));
  $('#15 .task').val(localStorage.getItem('15'));
  $('#16 .task').val(localStorage.getItem('16'));
  $('#17 .task').val(localStorage.getItem('17'));





