'use strict';
// 1. here in below comment as can see that till message selects the element and textcontent give only content
// console.log(document.querySelector('.message').textContent);
// 2. the document.querySelector are all the dom method and property and an important thing is that it is not a part of javascript rather it is the part of web api i.e web api contains a library which can have conversation with the both javascript and browers
// Now changing the html display content
// document.querySelector('.message').textContent = 'Correct Message!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//3.Now handling the click events
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
// });
// here above first the class is selected then an eventlistner is added to it following with handler also to ensure what activity need to be done
//4. Whenever we get any input from the user it is always in the form of string so we need to conevert it into number or typeof we need
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number Enterd !';
//   }
// });
//5.Now building a game logic
// create a number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Enterd !';
    // Now by using function
    displayMessage('No NUmber Entered!');
  } else if (guess === secretNumber) {
    // 6. Manipulating the css styles using DOM
    // hide number behind the question mark
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct Number !';
    displayMessage('Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Setting up the high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //Refactoring
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too High!' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the Game.';
      displayMessage('You Lost the Game.');
      document.querySelector('.score').textContent = 0;
    }
  }
  //else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too High!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game.';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the Game.';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//7.Working on again btn
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
  //   document.querySelector('.message').textContent = 'Start Guessing --';
  displayMessage('Start Guessing ..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

//8.Refactoring i.e it is the technique the above code
// 1. Step 1 to identify the duplicate in the code
// 2. Sometime we have almost same code of version so that can replace by using the function
