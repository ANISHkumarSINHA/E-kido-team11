let cards = document.querySelectorAll('.card');
let flippedCards = [];

cards.forEach(function(card) {
  card.addEventListener('click', flipCard);
});

function flipCard() {
  if (flippedCards.length < 2) {
    this.classList.add('flipped');
    flippedCards.push(this);
  }

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
    flippedCards[0].removeEventListener('click', flipCard);
    flippedCards[1].removeEventListener('click', flipCard);
  } else {
    flippedCards[0].classList.remove('flipped');
    flippedCards[1].classList.remove('flipped');
  }

  flippedCards = [];
}
