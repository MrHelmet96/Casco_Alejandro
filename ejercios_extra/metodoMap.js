// Dado el siguiente array [2, 4, 6, 8, 10], utiliza el método map para crear un nuevo array que contenga el doble de cada número del array original.

const numeros = [2, 4, 6, 8, 10];

const nuevosNumeros = numeros.map(numero => numero * 2);

console.log(nuevosNumeros); // Output: [4, 8, 12, 16, 20]
