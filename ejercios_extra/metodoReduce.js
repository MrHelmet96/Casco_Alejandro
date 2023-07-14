// Dado el siguiente array [10, 20, 30, 40, 50], utiliza el método reduce para calcular la suma de todos los elementos del array.

const numeros = [10, 20, 30, 40, 50];

const sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaTotal); // Output: 150
