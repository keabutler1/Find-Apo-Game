
// establish the variables
var startButton = $("#startButton");
var timer = $("#timer");
var playerOneScore = $("#p1score");
var playerTwoScore =$("#p2score");
var $boxes = $(".grid-box");
var $img = $('<img>').attr("src", "https://i.imgur.com/OSpAWBJb.jpg");
var $imgVilian = $('<img>').attr("src", "https://i.imgur.com/RICLpn3b.jpg");
var $gridBox4 = $(".grid-box4");
//  specific game variables
// let p1score;
// let p2score;
// //functions to get the game running but not started yet
function getSet() {
     p1score = 0;
     p2score = 0;
    timer = 30
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
 $("imgVilian").hide(); 
 $("img").hide();
 // this function will start the game once the start button is pressed
$('#startButton').click(function() {
    console.log("Play Game");
    countdown();
    // .append = make the img appear within the grid 
    $($boxes[5]).append($img);
    $($boxes[1]).append($imgVilian);
});
// make img move
$($boxes).click(function() {
alert('1 Point');
($img).fadeOut();
($imgVilian).fadeOut();
($gridBox4).fadeOut();
});
// function randomBox () {
//  $($boxes) [math.floor(math.random() * (boxes.length -1))]
// };
function moveApo() {
    $($boxes) = randomBox();
    $($boxes[5]).append($img);
};



// function scoreBoard() {
//      setTimeout(countdown, 500)
//     $('#pl1score').html("" + number);
//      number ++;
//     if(number < 0);
// };
  


