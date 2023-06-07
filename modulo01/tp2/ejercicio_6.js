// Consigna: Escribir un script que muestre la posición de la primera vocal de un texto introducido por teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1

const texto = prompt("Ingrese un texto:"); // Pide al usuario que ingrese un texto y lo almacena en la variable "texto"

function encontrarPrimeraVocal(texto) { //Función 'encontrarPrimeraVocal' con parametro 'texto'
  const vocales = ["a", "e", "i", "o", "u","A","E","I","O","U"]; // array 'vocales' donde se almacenan todas las vocales

  for (let i = 0; i < texto.length; i++) { //un FOR para recorrer el array
    let caracter = texto[i]; // variable 'caracter' que almacena el dato de texto en la posición 'i'.
    if (vocales.includes(caracter)) { // SI la el string almacenado en 'caracter' incluye una vocal almacenada en el array, entonces: 
      return `La primera vocal es "${texto[i]}" y está en la posición ${i+1}.`; //devuelve un mensaje diciendo cual es la primer vocal y en qué posición se encuentra
    }
  }
  return "No se encontraron vocales en el texto."; // si lo ingresado no posee ninguna vocal, retorna este mensaje
}

const resultado = encontrarPrimeraVocal(texto); //almacena el llamado a la función en la variable 'resultado'
document.write(resultado); // imprime en pantalla la variable 'resultado'.
