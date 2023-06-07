// Consigna: Crear el archivo “ejercicio_9.js”. Declarar un array llamado “vocales” con las 5 letras. Luego se deben imprimir en el navegador uno debajo de otro.

let vocales = ['a','e','i','o','u']

//solución "simple"
for (let vocal of vocales){
    document.write(` ${vocal} <br/>`);
}
document.write("<br/>");
// Solución "compleja"
for (i=0; i < vocales.length; i++){
    document.write(`la vocal n° ${i + 1} es la: ${vocales[i]} <br/>`);
}