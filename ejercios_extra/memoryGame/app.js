let firstCard = null;
let secondCard = null;
let canFlip = true;

// Imágenes que se usarán en las cartas
const images = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg", /* Agrega aquí más imágenes */];

// Función para revolver el array de imágenes
function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Agregar evento click a cada carta después de crearlas en el DOM
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", () => flipCard(index));
  });
}

// Función para voltear una carta
function flipCard(index) {
  if (!canFlip) return;

  const card = document.getElementById("card" + index);
  card.classList.toggle("flipped");

  if (firstCard === null) {
    firstCard = card;
  } else {
    secondCard = card;
    checkCards();
  }
}

// Función para verificar si las cartas coinciden
function checkCards() {
  canFlip = false;

  setTimeout(() => {
    if (firstCard.src === secondCard.src) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
      firstCard = null;
      secondCard = null;
      canFlip = true;
      checkWin();
    } else {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard = null;
      secondCard = null;
      canFlip = true;
    }
  }, 1000);
}

// Función para verificar si el jugador ha ganado
function checkWin() {
  const flippedCards = document.querySelectorAll(".flipped");
  if (flippedCards.length === images.length * 2) {
    alert("¡Has ganado!");
  }
}

// Revolver las imágenes antes de comenzar el juego
shuffleImages(images);
