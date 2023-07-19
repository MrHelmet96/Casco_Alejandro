// Crea un juego de adivinanza donde el programa elige un número aleatorio entre 1 y 100, y el usuario debe adivinar cuál es ese número.

function juegoAdivinanza() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;
  
    while (true) {
      const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  
      if (isNaN(numeroUsuario)) {
        alert("Por favor, ingresa un número válido.");
        continue;
      }
  
      intentos++;
  
      if (numeroUsuario === numeroAleatorio) {
        alert(`¡Felicidades! ¡Adivinaste el número en ${intentos} intentos!`);
        break;
      } else if (numeroUsuario < numeroAleatorio) {
        alert("Demasiado bajo. Intenta de nuevo.");
      } else {
        alert("Demasiado alto. Intenta de nuevo.");
      }
    }
  }
  
  juegoAdivinanza();