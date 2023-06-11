// Realiza un script que pida un texto e indique si es un palíndromo

let input = prompt("Ingrese una palabra o frase para saber si es un palíndromo", "...");
let inputMinuscula = input.toLowerCase();
let invertido = Array.from(inputMinuscula).reverse().join("");

if (inputMinuscula == invertido) {
    console.log(`El texto ingresado es palíndromo`);
} else {
    console.log(`el texto ingresado NO es un palíndromo`);
}