let saludar = function(){
    console.log('Hola, soy una función llamada saludar');
}

let despedir = function(){
    console.log('Chau, soy una función llamada saludar');
}

acciones = {
    'hola': function(){
        console.log('Hola, soy una función llamada saludar');
    },

    'chau': function(){
        console.log('Chau, soy una función llamada saludar');
    }
}

module.exports = saludar;