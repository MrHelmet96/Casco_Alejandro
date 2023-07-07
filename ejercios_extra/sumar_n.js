// Escribe una función llamada sumarPrimerosN que pida al usuario un número n como argumento y devuelva la suma de los primeros n números naturales

function sumarPrimerosN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

// Ejemplo de uso:
const numero = parseInt(prompt("Ingrese un número:"));
const resultado = sumarPrimerosN(numero);
console.log(resultado);
