// Consigna: Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales < 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5 “Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”

const calificaciones = []; // se crea un array vacio, asignado a la constante 'calificaciones'

while(true) { // Se inicia un bucle while(true) que se ejecutará indefinidamente hasta que se rompa
    const inputNota = prompt(`Ingrese la nota del alumno (o ingrese "fin" cuando haya terminado la carga)`,`nota aquí`); //En cada iteración, se le solicita al usuario que ingrese una nota utilizando prompt()

    if(inputNota.toLowerCase() === "fin") { //SI el usuario ingresa "fin":
        break; // se rompe el bucle con la instrucción break
    }

    const nota = parseFloat(inputNota); // De lo contrario, se intenta convertir la entrada de nota a un número utilizando parseFloat() y se almacena en la variable nota

    if (nota <1 || nota >10 || isNaN(nota)) { // Se verifica si la nota está fuera del rango válido (menor que 1 o mayor que 10) o si no es un número válido utilizando 'isNaN()'
        alert(`La nota ingresada no es valida. \nIngrese una nota válida o "fin" para finalizar la carga.`) //Si alguna de estas condiciones se cumple, se muestra una alerta indicando que la nota ingresada no es válida
        continue; // se utiliza continue para pasar a la siguiente iteración del bucle
    }
    calificaciones.push(nota); // Si la nota es válida, se agrega al array calificaciones utilizando push()
}
// Se inicializan las variables 'contador' y 'suma_de_notas' con valor 0.
contador = 0;
suma_de_notas = 0;
for (nota of calificaciones) { // Se utiliza un bucle for...of para iterar sobre cada elemento nota en el array calificaciones
    suma_de_notas = suma_de_notas + nota; //En cada iteración, se suma la nota a la variable suma_de_notas
    contador = contador + 1; // se incrementa el contador en 1
}
promedio = suma_de_notas / contador; //Se calcula el promedio dividiendo la suma de las notas entre la cantidad de notas, y se almacena en la variable promedio.

 //Se evalúa el promedio para determinar la condición del alumno.
if (promedio < 6 ){
    condicion = "Reprobado"; // Si el promedio es menor que 6, se asigna la cadena "Reprobado" a la variable 'condicion'
} else if (promedio >=6 && promedio <=8) {
    condicion = "Aprobado"; // Si el promedio está entre 6 y 8 (ambos inclusive), se asigna la cadena "Aprobado".
} else if (promedio > 8) { 
    condicion = "Sobresaliente"; // Si el promedio es mayor que 8, se asigna la cadena "Sobresaliente".
}
// Se utiliza document.write() para mostrar en el documento el resultado del promedio y la condición
document.write(`El promedio del alumno es ${promedio} y su condición es: ${condicion}`);

console.log(calificaciones); //en consola el array con las notas ingresadas.