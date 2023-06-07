//Consiga : El factorial de un número entero positivo se define como el producto de todos los números naturales anteriores o iguales a él. Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero.

//Pedir al usuario que ingrese un número y asignar ese valor a una variable
let valorIngresado = prompt("Por favor, Ingrese un número(entero y mayor que cero)", "...");

// Transformar el tipo de dato guardado en "valorIngresado" a tipo de dato número entero, y almacenar ese dato en la variable "inputNum"
let inputNum = parseInt(valorIngresado);

// Funcion para calcular el factorial   
function calcularFactorial (numero){
    let factorial = 1; // Se define factorial como 1 para comenzar la multiplicación
    
    for (let i=1; i <= numero; i++){ //for para recorrer el array. dicha cantidad está determinada por el número que ingresó el usuario
    factorial *= i // factorial = (es igual) al valor dentro de 'factorial' multiplicado por el valor de 'i'.
    }
    return factorial //devuelve el resultado de la variable "factorial" al final del recorrido
}
// verifica si el usuario ingresó un número valido o no
if (isNaN(inputNum) || inputNum <=0) {
    console.log("No se ha ingresado un número valido");
} else {
    const resultado = calcularFactorial(inputNum); // se llama a la funcion "calcularFactorial" con el parametro "inputNum" y se almacena el resultado en la constante "resultado" 
    console.log(`El factorial de ${inputNum} es: ${resultado}`); // Imprime en consola el resultado.
}
