// var textBoxEl = $("past", "present", "future")
var hourInputEl = $("hourInput"); 
var saveBtn = $(".saveBtn");


//Current Day, Date, and Time
var today = (moment().format("dddd, MMMM Do YYYY"));
$("#currentDay").text(today);


//Text in textbox
var printHourInput = function (input) {
    var listEl = $("<li>");
    listEl.addClass("list-group-item").text(listEl);
    listEl.appendTo(hourInputEl);
};

// Save input in textbox
var handleInputSave = function (event) {
    event.preventDefault ();

    var hourInput = hourInputEl.val();

    printHourInput(hourInput);

   
}

saveBtn.on("save", handleInputSave);


// Color change by time
function blockColor(){
    var time = moment().hours();
// for loop $.each("CLASS NAME"), then added logic

    $(".task").each(function() {
        var presentHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(presentHour);

        if (presentHour > time) {
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
};

// Save task input into local storage
saveBtn.on("click", function() {
    var hour = $(this).siblings(".hour").text();
    var task = $(this).siblings(".task").val();

localStorage.setItem(hour, task);
})

  // load any saved data from localStorage
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#1 .description').val(localStorage.getItem('1'));
  $('#2 .description').val(localStorage.getItem('2'));
  $('#3 .description').val(localStorage.getItem('3'));
  $('#4 .description').val(localStorage.getItem('4'));
  $('#5 .description').val(localStorage.getItem('5'));

localStorage.getItem(hour, task);
blockColor();


