// Consigna: Crear una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

// abre una ventana en el navegador para que el usuario escriba un mensaje y lo almacena en la variable 'inputString'
let inputString = prompt("Por favor, ingresé un mensaje o palabra a elección:","...");

// Crea la función 'analizarTexto' y toma 'texto' como parametro
function analizarTexto(texto) {
    if (texto === texto.toUpperCase()){ // transforma el string almacenado en 'texto' lo transforma en mayúscula y lo compara con el valor original. Si coincide, retorna el mensaje debajo.
        return "todos los caracteres de su string están en mayúscula";
    } else if (texto === texto.toLowerCase()){ // si no se cumple la condición anterior, transforma el string almacenado en 'texto' lo transforma en minúscula y lo compara con el valor original. Si coincide, retorna el mensaje debajo.
        return "todos los caracteres de su string están en minúsculas";
    } else {  // si ninguna de las condiciones se cumple, devuelve el mensaje debajo
        return "Este texto contiene tanto minúsculas como mayúsculas";
    }
}

document.write(analizarTexto(inputString)); //llama a la función 'analizarTexto' pasandole como parámetro el string almacenado en 'inputString' y lo imprime por pantalla.