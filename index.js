function redirectToHome() {
  window.location.href = "pages/home.html";
}

document.getElementById("menu-icon").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  card1.classList.add("showCard");
  check1.addEventListener("click", () => {
    inactiveAllCards();
    card1.classList.add("showCard");
  });
  check2.addEventListener("click", () => {
    inactiveAllCards();
    card2.classList.add("showCard");
  });
  check3.addEventListener("click", () => {
    inactiveAllCards();
    card3.classList.add("showCard");
  });
});

// Service

var card1 = document.getElementsByClassName("card-map--1")[0];
var card2 = document.getElementsByClassName("card-map--2")[0];
var card3 = document.getElementsByClassName("card-map--3")[0];
var allCards = [card1, card2, card3];

var check1 = document.getElementsByClassName("map-image-container__place--1")[0];
var check2 = document.getElementsByClassName("map-image-container__place--2")[0];
var check3 = document.getElementsByClassName("map-image-container__place--3")[0];


function showCard(check, card) {
  check.addEventListener("click", () => {
    inactiveAllCards();
    card.classList.remove("hideCards");
    card.classList.add("showCard");
  });
}


function inactiveAllCards() {
  allCards.forEach((c) => {
    c.classList.remove("showCard");
  });
}


/* function openCard (card, activator) {
  activator.addEventListener("click", () => {
    card.classList.toggle("cardActive")
    console.log('works', card, activator)
  })
}



openCard(card1, check1)
openCard(card2, check2)
openCard(card2, check3)
 */

function logSimple (activator, card) {
  console.log(activator, card)
}

logSimple(card1, check1)