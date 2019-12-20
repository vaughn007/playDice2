var p1Button = document.querySelector(".player1");
var p2Button = document.querySelector(".player2");
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

//click on dice to roll
var rollDice = document.querySelectorAll(".rollDice").length;
for (var i = 0; i < rollDice; i++) {
  document.querySelectorAll(".rollDice")[i].addEventListener("click", function () {
    dice1Clicked();
    dice2Clicked();

  });
  
}

function dice1Clicked() {
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
  
 
  
}

function  dice2Clicked() {
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
    
  
  
  
}


//player 1 button click
p1Button.addEventListener("click", function () {
  winnerSound();
  animationGlow(); //glow round dice
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

//player 2 button click
p2Button.addEventListener("click", function () {
  winnerSound();
  animationGlow(); //glow round dice function
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


function winnerSound() {
  var snakeEyes = new Audio('sounds/RollsDice-SoundBible.com.mp3');
  snakeEyes.play();
  
}


//add glow to dice and button on click
function animationGlow() {
  window.onclick = function(event){
    if(event.target.matches('.rollDice')){
      event.target.classList.add("pressed"); 
        event.target.classList.add("pressed");  
        setTimeout(function () {
          event.target.classList.remove("pressed");
      },100);
    }   
  };
  
  
}


//javascript how do you check if the event.target matches the selector


// window.addEventListener("click", function (e) { //e bring back info about event
//   //console.log(e.target); //what user clicked on
// });