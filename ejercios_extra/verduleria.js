const fs = require('fs');
const rutaArchivo1 = 'ejerciciosConJSON/verduleria.json';

// Lee el contenido del archivo JSON
const contenidoArchivo1 = fs.readFileSync(rutaArchivo1, 'utf-8');

// Parsea la cadena JSON a un objeto JavaScript
const objetoJSON = JSON.parse(contenidoArchivo1);

// Accede a las propiedades "frutas" y "verduras"
const frutas = objetoJSON.frutas;
const verduras = objetoJSON.verduras;

// Muestra los contenidos en la consola
console.log('Frutas:', frutas);
console.log('Verduras:', verduras);
