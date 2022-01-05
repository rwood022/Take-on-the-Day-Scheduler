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
// for loop $.each("CLASS NAME"), then add logic

    $(".task").each(function() {
        var presentHour = parseInt($(this).attr("id"));
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

localStorage.getItem(hour, task);
blockColor();


