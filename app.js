let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function homePlus1() {
  homePoints++;
  homeScore.textContent = homePoints;
}

function homePlus2() {
  console.log("clicked 2");
  homePoints += 2;
  homeScore.textContent = homePoints;
}

function homePlus3() {
  homePoints += 3;
  homeScore.textContent = homePoints;
}

function guestPlus1() {
  guestPoints++;
  guestScore.textContent = guestPoints;
}

function guestPlus2() {
  guestPoints += 2;
  guestScore.textContent = guestPoints;
}

function guestPlus3() {
  guestPoints += 3;
  guestScore.textContent = guestPoints;
}

function reset() {
  homePoints = 0;
  guestPoints = 0;
  homeScore.textContent = homePoints;
  guestScore.textContent = guestPoints;
}
