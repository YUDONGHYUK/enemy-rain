"use strict";

const HERO_WIDTH = 35;
const ENEMY_WIDTH = 45;
const ENEMY_HEIGHT = 54;
const ENEMY_COUNT = 10;
let HERO_POSITION = 400 - HERO_WIDTH / 2;

const startBtn = document.querySelector(".start-button");
const gameField = document.querySelector(".game");
const gameFieldRec = gameField.getBoundingClientRect();
const hero = document.querySelector(".hero");
const heroRec = hero.getBoundingClientRect();
const popUp = document.querySelector(".pop-up");
const popUpRetry = document.querySelector(".pop-up__retry");

console.log(heroRec);

let started = false;
let fallingEnemyController = undefined;
let addEnemyController = undefined;
let count = 0;

window.addEventListener("keydown", (event) => {
  moveHero(event);
});

startBtn.addEventListener("click", () => {
  // !started ? startGame() : stopGame();
  if (!started) {
    startGame();
  }
  started = !started;
});

popUpRetry.addEventListener("click", () => {});

function startGame() {
  // changeStartBtnText();
  addEnemy();
  fallingEnemyController = setInterval(() => {
    fallingEnemy();
  }, 10);
  addEnemyController = setInterval(() => {
    addEnemy();
  }, 2500);
}

// 나중에 구현

// function stopGame() {
//   started = false;
//   changeStartBtnText();
//   finishGame();
// }

function finishGame() {
  started = false;
  clearInterval(fallingEnemyController);
  clearInterval(addEnemyController);
  showPopUp();
}

// Enemy

function addEnemy() {
  const x1 = 0;
  const x2 = gameFieldRec.width - ENEMY_WIDTH;

  const enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.position = "absolute";
  enemy.style.left = `${randomNumber(x1, x2)}px`;
  gameField.appendChild(enemy);
}

function fallingEnemy() {
  const enemys = document.querySelectorAll(".enemy");

  for (let i = 0; i < enemys.length; i++) {
    let enemyRec = enemys[i].getBoundingClientRect();
    let hero = document.querySelector(".hero");
    let heroRec = hero.getBoundingClientRect();

    enemys[i].style.top = `${enemys[i].offsetTop + 1}px`;
    if (
      enemyRec.bottom >= heroRec.top &&
      ((enemyRec.right >= heroRec.left && enemyRec.right <= heroRec.right) ||
        (enemyRec.left >= heroRec.left && enemyRec.left <= heroRec.right))
    ) {
      enemys[i].style.backgroundPosition = "45px";
      finishGame();
    }
    if (enemys[i].offsetTop + 54 > gameFieldRec.height) {
      enemys[i].remove();
      finishGame();
    }
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Hero

function moveHero(event) {
  console.log(event);
  if (event.key === "ArrowLeft" && HERO_POSITION > 0) {
    hero.style.backgroundPosition = "-70px";
    hero.style.left = `${HERO_POSITION - 10}px`;
    HERO_POSITION -= 10;
  } else if (event.key === "ArrowRight" && HERO_POSITION <= 800 - HERO_WIDTH) {
    hero.style.backgroundPosition = "-105px";
    hero.style.left = `${HERO_POSITION + 1}px`;
    HERO_POSITION += 10;
  }
}

function changeStartBtnText() {
  if (started) {
    startBtn.innerHTML = "Stop";
  } else {
    startBtn.innerHTML = "Start";
  }
}

function showPopUp() {
  popUp.style.visibility = "visible";
}
