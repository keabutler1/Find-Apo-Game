// establish the variables
var startButton = $("#startButton");
var timer = $("#timer");
var playerOneScore = $("#p1score");
var playerTwoScore =$("#p2score");
var $boxes = $(".grid-box");
var $img = $('<img>').attr("src", "https://i.imgur.com/OSpAWBJb.jpg");
var $imgVilian = $('<img>').attr("src", "https://i.imgur.com/A0aFviSb.png");
var $gridBox4 = $(".grid-box4");
var $audio = $('<audio>').attr("audio/Queen - We Are The Champions (Lyrics) (1) (mp3cut.net).mp3");
var number = 60;
 //specific game variables
 let p1score;
 let p2score;
// //functions to get the game running but not started yet
function getSet() {
  p1score = 0;
   p2score = 0;
  };
    
 $("img").hide();
 $("imgVilian").hide(); 
 // this function will start the game once the start button is pressed
$('#startButton').click(function() {
    console.log("Play Game");
    const interval = setInterval(function() {
        $('#timer').html("" + number);
        var randomBox = Math.floor(Math.random() * $boxes.length);
          $boxes[randomBox].append($img[0]);
        if (number === 0) {
            clearInterval(interval);
        }
        number--;
        }, 2000)
    });
     $boxes.append($imgVilian[0])
    

$($img).click(function() {
 alert('1 Point');
 $($p1score).innertext = 1
});

$($boxes).click(function() {
 alert('DANGER');
 ($boxes).slideUp(3000).slideDown(5000);
});
