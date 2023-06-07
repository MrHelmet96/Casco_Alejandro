// Consigna: Crear el archivo correspondiente a “ejercicio_7.js”, Ejecutarlo y luego agregar lineas de comentario explicando que hace el programa


let dato, resultado; //Se define las variables "dato" y "resultado"
val1 = window.prompt("Introduce tu nombre", "..."); // se invoca un prompt que le indica al usuario que escriba su nombre. Aquello que el usuario introduzca será almacenado en al variable "val1"
val2 = window.prompt("Introduce tu apellido", "..."); // se invoca un prompt que le indica al usuario que escriba su apellido. Aquello que el usuario introduzca será almacenado en al variable "val2"
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ; // Se concatena ambos datos en un String, el cual es almacenado en la variable "resultado"
document.write(resultado); // Se imprime por pantalla lo almacenado en la variable "resultado".
//la variable "dato" no se utiliza en ningún momento, ya que no se le ha asignado ningún valor, ni se la ha llamado.