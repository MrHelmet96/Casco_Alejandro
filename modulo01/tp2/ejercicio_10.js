// Consigna: Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días. Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.

let INPUTmes; // Inicia la variable 'INPUTmes'

do { //inicia bucle do... while... 
  INPUTmes = parseInt(prompt("Ingrese el número del mes (1-12):")); //pide al usuario a traves de un 'prompt()' que ingrese un numero. convierte ese dato en un dato de tipo numero utilizando 'parseInt()'. y lo almacena en la variable INPUTmes

  if (INPUTmes < 1 || INPUTmes > 12 || isNaN(INPUTmes)) { // SI, INPUTmes  es menor que 1 o mayor que 12 o no es un número:
    alert("Ingrese un número de mes válido (entre 1 y 12)."); // alerta que no es valido
  } //Esto permite que esto se ejecute sin para hasta que el usuario ponga un dato valido (los cuales estan en las condiciones del WHILE)
} while (INPUTmes < 1 || INPUTmes > 12 || isNaN(INPUTmes));

const thisYear = new Date().getFullYear(); //Se crea una instancia del objeto Date y utiliza el método getFullYear() para obtener el año actual y se almacena en la variable 'thisYear'
const fecha = new Date(thisYear, INPUTmes - 1, 1); // Aquí se crea una nueva instancia Date, Se utiliza el año actual (thisYear), el número de mes ingresado por el usuario (INPUTmes - 1 para ajustar el índice de mes de 0 a 11) y se establece el día en 1. Esto nos da la fecha del primer día del mes especificado. Y esto se almacena en la variable 'fecha'
fecha.setMonth(fecha.getMonth() + 1); // Con esta línea, se utiliza el método setMonth() para incrementar el mes en 1 en la instancia de fecha. Esto nos lleva al primer día del mes siguiente.
fecha.setDate(fecha.getDate() - 1); // Aquí se utiliza el método setDate() para establecer el día en el valor actual menos 1 en la instancia de fecha. Esto nos retrocede un día y nos da el último día del mes actual.

const cantidadDias = fecha.getDate(); // En esta línea, se utiliza el método getDate() para obtener el número de día de la instancia de fecha. El resultado se almacena en la variable cantidadDias, que representa el número de días en el mes especificado.

const nombresMeses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]; //Array con los nombres de los meses, a fin de poder imprimirlos en pantalla

const nombreMes = nombresMeses[INPUTmes - 1]; // se accede al nombre del mes correspondiente utilizando como indice el numero ingresado por el usuario menos 1 (-1) y se lo almacena en la variable "nombreMes"

document.write(`El mes ${INPUTmes} es ${nombreMes} y tiene ${cantidadDias} días.`); // imprime en el documento el n° del mes ingresado, su nombre y cuantos días tiene.
