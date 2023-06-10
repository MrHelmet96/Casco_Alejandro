// Realiza un script que cuente el número de vocales que tiene un texto

let inputCadena = prompt("Introduce una cadena de texto:");
let numchar = inputCadena.length;    //Devuelve la longitud del string.
cadena = inputCadena.toUpperCase();  //Devuelve el string en mayúsculas.
let car;
let contador = 0;
for (let i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    //recupera el caracter i del string.
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");