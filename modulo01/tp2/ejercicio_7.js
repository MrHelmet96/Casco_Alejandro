// Consigna: Escribir una función que reciba un texto y lo devuelva al revés.

function alReves(texto) { // Se define una función llamada alReves que toma un parámetro texto.
    const invertido = Array.from(texto).reverse().join(""); // crea una nueva variable 'invertido'. Se utiliza 'Array.from(texto)' para convertir el texto en un array de caracteres. Luego se utiliza 'reverse()' para invertir el orden de los elementos. Por ultimo se usa 'join("")' para unir los elementos del array en una cadena de texto nuevamente.
   return invertido; //retorna lo almacenado en la varible 'invertido'
}

var texto = prompt("Escriba un mensaje", ".sever la atse otsE"); // Se declara una variable texto que almacena el valor ingresado por el usuario
var invertido = alReves(texto); // Se llama a la función 'alReves' pasando el valor de texto como argumento y se asigna a la variable 'i'nvertido'
console.log(invertido); // se muestra el valor de 'invertido' en la consola 
