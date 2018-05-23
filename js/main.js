// establish the variables
var startButton = $("#startButton");
var timer = $("#timer");
var playerOneScore = $("#p1score")
var playerTwoScore =$("#p2score")
var gameGrid = $("gameGrid")
var $boxes = $(".grid-box")
var gridBox4 = $("instructionBox")
var $img = $('<img>').attr("src", "https://i.imgur.com/OSpAWBJb.jpg")
//  specific game variables
// let p1score;
// let p2score;
// //functions to get the game running but not started yet
// function getSet() {
//     p1score = 0;
//     p2score = 0;
//     timer = 30
// }
 function apoMoves() {
    // .append = make the img appear within the grid
    // math.random = have the img appear in the boxes randomly
    // math.floor?
 }

// this function will make Apo move around the boxes
//every half second I want the img to move
// setinterval (500 milsecs)

// // this function will keep track of player 1's score
// function scoreplUno() {

// }
// // this function will keep track of player 2's score
// function scorepldos() {

// }
// timer goes down from 30 to zero in one second intervals.
 var number = 30;
function countdown() {
    setTimeout(countdown, 1000)
    $('#timer').html("" + number);
    number --;
    if(number < 0) {
        alert('We Have A Winner!')
    }
}
 // this function will start the game once the start button is pressed
$('#startButton').click(function() {
    console.log("Play Game");
    countdown();
    $img.append
})



   
