let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let restartEl = document.getElementById("restart-el");
let countHome = 0;
let countGuest = 0;
let countRestart = 0;

function add1Points() {
  countHome += 1;
  homeEl.textContent = countHome;
}

function add2Points() {
  countHome += 2;
  homeEl.textContent = countHome;
}

function add3Points() {
  countHome += 3;
  homeEl.textContent = countHome;
}

function add1Guest() {
  countGuest += 1;
  guestEl.textContent = countGuest;
}

function add2Guest() {
  countGuest += 2;
  guestEl.textContent = countGuest;
}

function add3Guest() {
  countGuest += 3;
  guestEl.textContent = countGuest;
}

function restart() {
  homeEl.textContent = 0; // Mengatur teks di homeEl menjadi 0
  countHome = 0; // Mengatur nilai countHome menjadi 0
  guestEl.textContent = 0; // Mengatur teks di guestEl menjadi 0
  countGuest = 0; // Mengatur nilai countGuest menjadi 0
}
