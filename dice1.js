var p1Button = document.querySelector("#player1");
var p2Button = document.querySelector("#player2");
var p1Score = 0; //keep track of score
var p2Score = 0;
var gameOver = false; //keep track of state 
var turnTacker = 0; //keep track of p1Score and p1Score turn
var gameStart = false;
var highestDiceRoll = 0;
var winner;

var player1 = ['images/dice1.png',
'images/dice2.png', 'images/dice3.png','images/dice4.png',
'images/dice5.png','images/dice6.png'];

var player2 = ['images/dice1.png',
'images/dice2.png', 'images/dice3.png','images/dice4.png',
'images/dice5.png','images/dice6.png'];

var randPlayer1 = Math.floor(Math.random() * player1.length);
var randPlayer2 = Math.floor(Math.random() * player2.length);
  
var diceRolls = player1[randPlayer1] + " " + player2[randPlayer2];

//two dices that will have 6 dots when game start. Same dice value
document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");


//player 1
p1Button.addEventListener("click", function () {
  document.querySelector(".img1").setAttribute("src", player1[randPlayer1]);
  if (!gameOver) {
    if (turnTacker == 0) {
      turnTacker = 1;
      p1Score++;
      p2Button.click(); //computer roll dice automatically
    }

    if (randPlayer1 > randPlayer2) {
    highestDiceRoll = player1;
    winner = document.querySelector("h1").innerHTML = "Player1 Won";
    gameOver = true; //stop adding to score
    
    }
    if (randPlayer1 == randPlayer2) {
      winner = document.querySelector("h1").innerHTML = "DRAW";
      
    }
    
    
    
  }

});

//player 2
p2Button.addEventListener("click", function () {
  document.querySelector(".img2").setAttribute("src", player2[randPlayer2]);
  if (!gameOver) {
    if (!gameStart) {
      gameStart = true;
      p2Score++;
      turnTacker = 0;
      p1Button.click(); //computer roll dice automatically
    }
    if (turnTacker == 1) {
      p2Score++
      turnTacker = 0; // reset turn to 0. Player turn is over/off 
      p1Button.click();
    }

    if (randPlayer2 > randPlayer1) {
      highestDiceRoll = player2;
      winner = document.querySelector("h1").innerHTML = "Player2 Won";
      gameOver = true; //stop adding to score
      
    }
    if (randPlayer2 == randPlayer1) {
      winner = document.querySelector("h1").innerHTML = "DRAW";
      
    }
    
    
  }
  

});

function refreshPage(){
  window.location.reload();
}



// var p1Button = document.querySelector("#player1");
// var p2Button = document.querySelector("#player2");
// var p1Score = 0; //keep track of score
// var p2Score = 0;
// var gameOver = false; //keep track of state 
// var turnTacker = 0; //keep track of p1Score and p1Score turn
// var gameStart = false;

// function rollDice () {
//   var highestDiceRoll = 0;
//   var winner;

//   var player1 = ['images/dice1.png',
//   'images/dice2.png', 'images/dice3.png','images/dice4.png',
//   'images/dice5.png','images/dice6.png'];

//   var player2 = ['images/dice1.png',
//   'images/dice2.png', 'images/dice3.png','images/dice4.png',
//   'images/dice5.png','images/dice6.png'];

//   //two dices that will have 6 dots when game start. Same dice value
//   document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//   document.querySelector(".img2").setAttribute("src", "images/dice6.png");

  

// var randPlayer1 = Math.floor(Math.random() * player1.length);
// var randPlayer2 = Math.floor(Math.random() * player2.length);

// var diceRolls = player1[randPlayer1] + " " + player2[randPlayer2];

// //player1
// p1Button.addEventListener("click", function () {
//   document.querySelector(".img1").setAttribute("src", player1[randPlayer1]);
//   document.querySelector(".img2").setAttribute("src", player2[randPlayer2]);
  
//   if (randPlayer1 > randPlayer2) {
//     highestDiceRoll = player1;
//     winner = document.querySelector("h1").innerHTML = "Player1 Won";
//   } else if (randPlayer2 > randPlayer1) {
//     highestDiceRoll = player2;
//     winner = document.querySelector("h1").innerHTML = "Player2 Won";
//   } else {
//     winner = document.querySelector("h1").innerHTML = "DRAW";
//   }
  
// });

// //player1
// p2Button.addEventListener("click", function () {
//   document.querySelector(".img1").setAttribute("src", player1[randPlayer1]);
//   document.querySelector(".img2").setAttribute("src", player2[randPlayer2]);
  
//   if (randPlayer1 > randPlayer2) {
//     highestDiceRoll = player1;
//     winner = document.querySelector("h1").innerHTML = "Player1 Won";
//   } else if (randPlayer2 > randPlayer1) {
//     highestDiceRoll = player2;
//     winner = document.querySelector("h1").innerHTML = "Player2 Won";
//   } else {
//     winner = document.querySelector("h1").innerHTML = "DRAW";
//   }
  
// });




// }
// rollDice();


// function playGame() {
//   document.querySelector(".img1").setAttribute("src", player1[randPlayer1]);
//   document.querySelector(".img2").setAttribute("src", player2[randPlayer2]);
  
//   if (randPlayer1 > randPlayer2) {
//     highestDiceRoll = player1;
//     winner = document.querySelector("h1").innerHTML = "Player1 Won";
//   } else if (randPlayer2 > randPlayer1) {
//     highestDiceRoll = player2;
//     winner = document.querySelector("h1").innerHTML = "Player2 Won";
//   } else {
//     winner = document.querySelector("h1").innerHTML = "DRAW";
//   }
  
  
// }







