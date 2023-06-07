// Consigna: Declarar un array llamado “meses” y que tenga guardado los meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio', 'Julio','Agosto','Septiembre','Noviembre','Diciembre']

const inputMes = prompt("Introduzca un número del 1 al 12");

if (inputMes >= 1 && inputMes <= 12) {
    const nombreMes = meses[inputMes - 1];
    //Mensaje en el documento
    document.write(`El mes correspondiente al número ${inputMes} es ${nombreMes}.`);
    //Mensaje en consola
    console.log(`El mes correspondiente al número ${inputMes} es ${nombreMes}.`);
  } else {
    document.write("El número ingresado no es válido. Refrescar la página.");
  }