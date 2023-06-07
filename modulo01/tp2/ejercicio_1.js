//Consigna: A partir del siguiente array que se proporciona:
var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras.
// 2. Imprimir estos elementos de menor a mayor cantidad de letras.
// 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y división) realizadas con los dos elementos numéricos.

let masLargo = ""; // variable bandera que permite almacenar el string más largo    
let nuevoArreglo = []; // un nuevo array vacio donde almacenar los elementos "String" del array "valores"
let arregloNumeros = []; // un nuevo array vacio donde almacenar los elementos "number" del array "valores"

// iniciamos un for que recorre todo el array "valores"
for(let i=0; i < valores.length; i++){
    
    if (typeof valores[i] == "string"){ //si el elemento en la posicion 'i' es un string:
        
        if (valores[i].length > masLargo.length) { //si el la longitud del elemento en la posicion 'i' es mayor a la longitud del elemento en la variable "masLargo":
            masLargo = valores[i]; // la variable "masLargo" pasa a almacenar el elemento de valores en la posicion 'i'
        }

        nuevoArreglo.push(valores[i]); // mueve los elementos de tipo string del arreglo "valores" al arreglo "nuevoArreglo"
    }

    if (typeof valores[i] == "number"){ //si el elemento en la posicion 'i' es de tipo number:
        arregloNumeros.push(valores[i]); // mueve los elementos de tipo number del arreglo "valores" al arreglo "arregloNumeros"
    }

 }
// Se utiliza el método 'sort()' para reordenar el array 'nuevoArreglo' segun un criterio de comparación
 nuevoArreglo.sort(function(a,b){ // se llama a una funcion de comparación que toma como parametros 'a' y 'b'
    return a.length - b.length; // se establece como criterio de comparación la longitud de cada elemento
 });

 let suma = arregloNumeros[0] + arregloNumeros[1]; //suma el elemento en la posición 0 y la posición 1 del arreglo "arregloNumeros"
 let resta = arregloNumeros[0] - arregloNumeros[1]; //resta el elemento en la posición 0 y la posición 1 del arreglo "arregloNumeros"
 let multiplicacion = arregloNumeros[0] * arregloNumeros[1]; //multiplica el elemento en la posición 0 y la posición 1 del arreglo "arregloNumeros"
 let division = arregloNumeros[0] / arregloNumeros[1]; //divide el elemento en la posición 0 y la posición 1 del arreglo "arregloNumeros"




 console.log("La palabra más larga dentro del array es:", masLargo); //muestra por consola cual es el valor más largo

 console.log("Los string de más corto a más largo: ", nuevoArreglo); // muestra por consola el array "nuevoArreglo" con sus elementos ordenados a más corto a más largo

 console.log(`la suma de los elementos es: ${suma}`) //Muestra por consola el resultado de la suma de los elemntos
 console.log(`la resta de los elementos es: ${resta}`) //Muestra por consola el resultado de la resta de los elemntos
 console.log(`la multiplicación de los elementos es: ${multiplicacion}`) //Muestra por consola el resultado de la de los elemntos
 console.log(`la division de los elementos es: ${division}`) //Muestra por consola el resultado de la de los elemntos
 