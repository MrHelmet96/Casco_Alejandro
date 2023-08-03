const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
];

const cards = images.concat(images);
let flippedCards = [];
let matchedCards = [];

let winMessageShown = false; // Variable para controlar si se mostró el mensaje de victoria

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(image) {
    const card = document.createElement("div");
    card.classList.add("card");
    const front = document.createElement("div");
    front.classList.add("front");
    front.textContent = "??";
    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${image})`;
    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener("click", () => flipCard(card));
    return card;
}

function flipCard(card) {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card)) {
        card.classList.add("flipped");
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkForMatch, 1000);
        }
    }
    
    checkForWin(); // Llamamos a la función para verificar si el usuario ha ganado
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const image1 = card1.querySelector(".back").style.backgroundImage;
    const image2 = card2.querySelector(".back").style.backgroundImage;

    if (image1 === image2) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards.push(card1, card2);
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
    }

    flippedCards = [];
}

function checkForWin() {
    if (matchedCards.length === cards.length && !winMessageShown) {
        showWinMessage();
    }
}

function showWinMessage() {
    const winMessage = document.querySelector(".win-message");
    winMessage.textContent = "¡Has ganado!";
    winMessage.style.display = "block"; // Mostramos el mensaje de victoria
    winMessageShown = true; // Actualizamos la variable para indicar que el mensaje fue mostrado
}

function resetGame() {
    const grid = document.querySelector(".grid");
    grid.innerHTML = ""; // Limpiamos las cartas
    flippedCards = [];
    matchedCards = [];
    initializeGame(); // Volvemos a inicializar el juego
    const winMessage = document.querySelector(".win-message");
    winMessage.textContent = ""; // Limpiamos el mensaje de victoria
    winMessageShown = false; // Reiniciamos la variable para que el mensaje pueda mostrarse nuevamente
}

function initializeGame() {
    const grid = document.querySelector(".grid");
    shuffle(cards);

    for (const image of cards) {
        const card = createCard(image);
        grid.appendChild(card);
    }
}

initializeGame();

document.addEventListener("keydown", (event) => {
    if (event.key === "F5" || event.key === "f5") {
        resetGame(); // Si se presiona F5, reiniciamos el juego
    }
});
