const gameGuideElement = document.querySelector('.js-game-guide');
const clickButtonElement = document.querySelector('.js-click-button')  


function showAndClearGameGuide() {
if(clickButtonElement.innerText === 'Click To Read The Rules Of The Game') {
clickButtonElement.innerHTML = 'Close';
gameGuideElement.innerText = `The rules of the game implies as follows:
1. You as a player Chooses any of the buttons
rock, paper or scissors

2. Computer Selects a random Move and compares it with your move
3. If:
  a) your move matches with the computers, It becomes a tie
  b) you pick rock and computer and computer pick scissors you win
  c) you pick rock and computer paper, you loose
4. This mode applys to all three buttons with each alternating the result of one another.
  
NB: The short game mode is as follows - 
a. At your leisure, you can click the 'autoPlay button', this will allow computer, to play vs AI
b. You can exit the autoPlay Mode by clicking the 'stop Playing' button.
c. pressing the key 'a' will cause you to automatically activate autoPlay mode and onpressing the key 'a
 again, it will exit the autoPlay game mode
 
 ` 




} else if(clickButtonElement.innerText === 'Close') {
clickButtonElement.innerHTML = 'Click To Read The Rules Of The Game';
gameGuideElement.innerHTML = '';
}
}


document.querySelector('.js-game-rules').
addEventListener('click', () => {
showAndClearGameGuide();
});


document.querySelector('.js-reset-score-button').
addEventListener('click', () => {

     let paraElement = document.querySelector('.js-comfirmation-message')
    paraElement.innerHTML = `are you sure you want to Reset the score?
    <button class='js-yes-button'>Yes</button> <button class=js-no-button>No</button>`
    document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
        score.wins = 0,
      score.loses = 0,
      score.ties = 0;
      localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
    })
    document.querySelector('.js-no-button')
    .addEventListener('click', () =>  {
    paraElement.innerHTML = '';
    });
    

});


document.querySelector('.js-autoPlay-button').
addEventListener('click', () => {
autoPlay();
});


let score = JSON.parse(localStorage.getItem
('score')) || {
wins: 0,
loses: 0,
ties: 0
}



updateScoreElement();

/*
if (!score) {
score = {
wins: 0,
loses: 0,
ties: 0
};
}
*/
let isAutoPlaying = false;
let intervalId;


//const autoPlay = () => {

//};

function autoPlay() {
  if(!isAutoPlaying) {
   intervalId =  setInterval(() => {
      const playerMove = pickcomputerMove();
     playGame(playerMove);
    }, 1000)
    isAutoPlaying = true;
    document.querySelector('.js-autoPlay-button')
    .innerText = 'Stop Playing'
  
  } else {
clearInterval(intervalId);
isAutoPlaying = false;
document.querySelector('.js-autoPlay-button')
.innerText = 'Auto Play'
  }
 
}


document.body.addEventListener('keydown', (event) => {
if(event.key === 'a') {
    autoPlay();
}
 else if (event.key === 'Backspace') {
    let paraElement = document.querySelector('.js-comfirmation-message')
    paraElement.innerHTML = `are you sure you want to Reset the score?
    <button class='js-yes-button'>Yes</button> <button class=js-no-button>No</button>`
    document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
        score.wins = 0,
      score.loses = 0,
      score.ties = 0;
      localStorage.removeItem('score')
      updateScoreElement();
     paraElement.innerHTML = '';
    })
    document.querySelector('.js-no-button')
    .addEventListener('click', () =>  {
    paraElement.innerHTML = '';
    });  
 }

});

document.querySelector('.js-rock-button')
.addEventListener('click', () => {
  playGame('rock')
});

document.querySelector('.js-paper-button')
.addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button')
.addEventListener('click', () => {
  playGame('scissors')
});



document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
playGame('rock');
  } else if (event.key === 'p') {
playGame('paper')
  } else if(event.key === 's') {
playGame('scissors')
  }
})

function playGame(playerMove){
const computerMove = pickcomputerMove(); 


let result = '';

if (playerMove === 'scissors') {
if (computerMove === 'rock') {
result = 'you loose';
} else if (computerMove === 'paper') {
result = 'you win';
}else if (computerMove === 'scissors') {
result = 'tie';
}
}

else if (playerMove === 'paper') {
if (computerMove === 'rock') {
result = 'you win.';
} else if (computerMove === 'paper') {
result = 'Tie.';
} else if (computerMove === 'scissors') {
result = 'You loose.';
}
}

else if (playerMove === 'rock') {
if ( computerMove === 'rock') {
result = 'tie';
} else if (computerMove === 'paper') {
result = 'you loose';
}else if (computerMove === 'scissors') {
result = 'you win';
}
}

if (result === 'you win') {
score.wins +=1;
}
else if (result === 'you loose') {
score.loses +=1;
}

else if (result === 'tie') {
score.ties +=1;
}


localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.js-move')
.innerHTML = `  You
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img  class="move-icon" src="images/${computerMove}-emoji.png">
Computer`

document.querySelector('.js-result')
.innerHTML = `${result}`

updateScoreElement();




}

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML = `wins: ${score.wins}, losses: ${score.loses}, ties: ${score.ties}.`
}




function pickcomputerMove() {
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >= 0 && randomNumber < 1/3) {
computerMove = 'rock';

}else if (randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper';

}else if (randomNumber >= 2/3 && randomNumber < 1) {
computerMove = 'scissors';
}
return computerMove;

}
