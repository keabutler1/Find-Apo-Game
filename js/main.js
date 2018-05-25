// establish the variables
var startButton = $("#startButton");
var timer = $("#timer");
var $boxes = $(".grid-box");
var $img = $('<img>').attr("src", "https://i.imgur.com/OSpAWBJb.jpg");
var $imgVilian = $('<img>').attr("src", "https://i.imgur.com/A0aFviSb.png");
    $imgVilian.addClass("villain")
var $audio = $('<audio>').attr("audio/Queen - We Are The Champions (Lyrics) (1) (mp3cut.net).mp3");
var number = 15;
var $score1 =  $('#score1');
var $score2 =  $('#score2');
var player1 = {
    score: 0,
    name: "PLAYER 1",
    scoreboard: $score1
}
var player2 = {
    score: 0,
    name: "PLAYER 2",
    scoreboard: $score2
}
var currentPlayer = player1

function switchTurns() {
    if(currentPlayer === player1) {
        currentPlayer = player2
        alert("Player 2, you're up. Click start to begin...")
        number = 15
    } 
    // DECLARE WINNER 
    else {
            if(player1.score > player2.score) {
            alert("Player 1 Wins!!")
    } else if(player2.score > player1.score) {
            alert("Player 2 wins!!") 
    } else {
            alert("Tie game!")
        }
    }
}     
// any time this function is run, with a provided number
// the current player will have their score added by that number
// (positive OR negative)
function updateScore(amount){
    currentPlayer.score += amount
    currentPlayer.scoreboard.html(currentPlayer.name + ' score: ' + currentPlayer.score)
};    
// Hide the images (HTML doc) as the game loads
 $("img").hide();
 $("imgVilian").hide(); 

 // this function will start the game once the start button is pressed
$('#startButton').click(function() {
    console.log("Play Game");
    const interval = setInterval(function() {
    $boxes.find('img').show()
    $('#timer').html("" + number);
    var randomBox = Math.floor(Math.random() * $boxes.length);
    $boxes.eq(randomBox).children('img').hide()
    $boxes[randomBox].append($img[0]);
    if (number === 0) {
    clearInterval(interval);
    switchTurns(
        // intro next player with animation
    $($boxes).slideUp(3000).slideDown(5000))
        }
        number--;
    }, 1000)
});
// Make the Vilian appear in all the boxes
    $boxes.append($imgVilian)
// When the Apo image is clicked run the score will increase for current player 
    $($img).click(function() {
    console.log("1 Point")
    updateScore(1)
});
// When the Vilian image is clicked run the score will decrease for current player 
    $('.villain').click(function() {
    console.log("-1 Point")
    updateScore(-1)
}); 
// 1. figure out everything that needs to be "reset" and the function to reset the game
// resetGame();
//     function resetGame() {
//         player1.score = 0;
//         player2.score = 0;
//         $timer = 0;
// }


// 2. Figure out why sometimes the image is glitchy...
// Still remains to be completed