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
    
        // saves input into storage
        localStorage.setItem(hour, task);
    });
    
    
    function blockColor() {
        var time = moment().hours();
        console.log(time);
        // for loop $.each("ID NAME"), then added logic
        $(".time-block").each(function () {
            var presentHour = parseInt($(this).attr("id"));
            console.log(presentHour);
            console.log($(this));

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
    blockColor();

    var interval = setInterval(blockColor, 5000);

})


  // load any saved data from localStorage
  $('#9 .task').val(localStorage.getItem('9'));
  $('#10 .task').val(localStorage.getItem('10'));
  $('#11 .task').val(localStorage.getItem('11'));
  $('#12 .task').val(localStorage.getItem('12'));
  $('#13 .task').val(localStorage.getItem('13'));
  $('#14 .task').val(localStorage.getItem('14'));
  $('#15 .task').val(localStorage.getItem('15'));
  $('#16 .task').val(localStorage.getItem('16'));
  $('#17 .task').val(localStorage.getItem('17'));

