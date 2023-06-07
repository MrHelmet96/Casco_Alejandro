// Consigna: Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego imprima por pantalla usando document.write().

function numerosAleatorios(){ // Crea la funcion 'numerosAleatorios'
    const numsGenerados = []; // Se crea un array vacio llamado 'numsGenerados'

    for (let i=1; numsGenerados.length < 100; i++) { //FOR para recorrer el array (lo hará mientras tenga menos de 100 elementos)
       let numero = Math.floor(Math.random() * 100) + 1;  // Se utiliza 'Math.random() para generar numeros aleatorios entre 0 y 1 (el uno es exclusive), los cuales son multiplicados por 100 para poder obtener un número superior a 0. Los numeros generados son decimales, por lo que se utiliza 'Math.floor()' para redondearlos para abajo y volverlos números enteros, finalmente, a ese numero se le suma 1 (+1), para poder llegar a 100
    
       if(!numsGenerados.includes(numero)) { // '!numerosGenerados.includes()' es una expresión que verifica si el número aleatorio generado no se encuentra en el array numerosGenerados
        numsGenerados.push(numero); // Si no está presente, se agrega al array utilizando el método push()
       }
    }
    
    numsGenerados.forEach(function(numero, indice) { //Se utiliza "forEach()" para recorrer cada elemeto del array 'numsGenerados. Se pasa una funcion anonima que toma los parametros 'numero'(para el valor) e 'indice'(para la posición)
        let posicion = indice + 1; //se declara una variable posicion que almacena el índice incrementado en 1.
        document.write(`Posición ${posicion}: ${numero}<br>`); //imprime en pantalla los número aleatorio generados y almacenados en el array 'numsGenerados'
    })
}

numerosAleatorios(); // llamado a la funcion 'numsAleatorios()'





