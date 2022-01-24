"use strict";
let score = 0;
let highscore = 0;
let preRandNum;

//Random Number Generator
const getRandomInt = function () {
  let random;
  const min = 1;
  const max = 6;
  do {
    random = Math.floor(Math.random() * (max - min + 1) + min);
  } while (random === getRandomInt.last);
  getRandomInt.last = random;
  return random;
};

// Visible or not
const makeVisible = function () {
  document.querySelector(".choice1").style.visibility = "visible";
  document.querySelector(".choice2").style.visibility = "visible";
};
const makeHidden = function () {
  document.querySelector(".choice1").style.visibility = "hidden";
  document.querySelector(".choice2").style.visibility = "hidden";
};

///Start
document.querySelector(".middle").addEventListener("click", function () {
  makeVisible();
  document.querySelector(".middle").style.visibility = "hidden";
  let randNum = getRandomInt();
  preRandNum = randNum;
  document.getElementById("dice").src = `images/dice${randNum}.png`;
  document.querySelector(
    ".message"
  ).textContent = `You rolled ${randNum}. Will next roll be higher or lower?`;
});

//Game Rules - higher
document.querySelector(".choice1").addEventListener("click", function () {
  let randNum = getRandomInt();
  if (randNum > preRandNum) {
    score++;
    preRandNum = randNum;
    document.querySelector(".score").textContent = score;
    document.getElementById("dice").src = `images/dice${randNum}.png`;
    document.querySelector(
      ".message"
    ).textContent = `You rolled ${randNum}. Will next roll be higher or lower?`;
  } else {
    document.getElementById("dice").src = `images/dice${randNum}.png`;
    document.querySelector(".message").textContent = `Your guess is wrong!`;
    makeHidden();

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

//Game Rules - lower
document.querySelector(".choice2").addEventListener("click", function () {
  let randNum = getRandomInt();
  if (randNum < preRandNum) {
    score++;
    preRandNum = randNum;
    document.querySelector(".score").textContent = score;
    document.getElementById("dice").src = `images/dice${randNum}.png`;
    document.querySelector(
      ".message"
    ).textContent = `You rolled ${randNum}. Will next roll be higher or lower?`;
  } else {
    document.getElementById("dice").src = `images/dice${randNum}.png`;
    document.querySelector(".message").textContent = `Your guess is wrong!`;
    makeHidden();
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});

//Again
document.querySelector(".again").addEventListener("click", function () {
  score = 0;
  makeHidden();
  document.querySelector(".middle").textContent = "Start";
  document.getElementById("dice").src = "images/pngegg.png";
  document.querySelector(".middle").style.visibility = "visible";
  document.querySelector(".message").textContent = "Start rolling...";
  document.querySelector(".score").textContent = score;
});
