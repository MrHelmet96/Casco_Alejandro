// Escribe una función llamada sumArray que tome como argumento un array de números y devuelva la suma de todos los números en el array.

let arrayNumeros = [4,87,14,63,22,95,10,34,2,7,64,51];

function sumArray(arreglo) {
    let total = 0;
    for(let i=0; i < arreglo.length; i++){
        total = total + arreglo[i];
    }
    return total;
}

console.log(sumArray(arrayNumeros));