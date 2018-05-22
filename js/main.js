// establish the variables
var startButton = $("#startButton");
 var timer = $("#timer");
 var playerOneScore = $("#playerOneScore")
 var playerTwoScore =$("#playerOneScore")
var img = $("apo")
 var gameGrid = $("gameGrid")
 var gridBox = $("eachBox")
 var gridBox4 = $("instructionBox")

// after the start is clicked the timer goes down from 60 to zero in one second intervals.

$(document).ready(function() {
 var number = 30;
function countdown() {
    setTimeout(countdown, 1000)
    $('#timer').html("" + number);
    number --;
    if(number < 0) {
        alert('We Have A Winner!')
    }
}
countdown();
});

// $(document).ready(function() {
// function beginGame() {
    // var number = 5;
    // $('startButton').on(function countdown() {
 
    // beginGame();
    
   
