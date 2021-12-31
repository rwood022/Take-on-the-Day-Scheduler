var today = moment();
var hourInputEl = $("hourInput"); 



$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

var printHourInput = function (input) {
    var listEl = $("<li>");
    listEl.addClass("list-group-item").text(listEl);
    listEl.appendTo(hourInputEl);
};

var handleInputSave = function (event) {
    event.preventDefault ();

    var hourInput = hourInputEl.val();

    printHourInput(hourInput);

    //resets hour input
    hourInputEl.val("");
}

