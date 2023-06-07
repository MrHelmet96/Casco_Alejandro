//Consigna: Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado debe ser impar.

//Pedir al usuario que ingrese un número y asignar ese valor a una variable "valorIngresado"
let valorIngresado = prompt("Por favor, Ingrese un número(entero y mayor que cero)", "...");

// Transformar el tipo de dato guardado en "valorIngresado" a tipo de dato número entero, y almacenar ese dato en la variable "inputNumero"
let inputNumero = parseInt(valorIngresado);

// se crea la función "par_o_impar" que utiliza el parametro "num"
function par_o_impar(num) {
    // si el resto de la division del número ingresado es 0, entonces el numero ingresado es par
    if ((num % 2) == 0){
        return `el numero ${num} es par`;
    } else { //de lo contrario es impar
        return `el numero ${num} es impar`;
    }
}

console.log(par_o_impar(inputNumero)); //llama a la funcion 'par_o_impar' e imprime lo que este devuelve por consola.