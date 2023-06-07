//Consigna: 
// Crear un array llamado “dias” y que almacene el nombre de los siete días de la semana. Mostrar por pantalla los siete nombres utilizando la función console.log().

let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Solución "Simple"
for (dia of dias) {
    console.log(dia);
}

// Solción "Comppleja"
for (let i = 0; i < dias.length; i++){
    console.log(`el día n° ${i + 1} es el ${dias[i]}.`)
}