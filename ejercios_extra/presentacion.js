
function presentarPersona(person) {
    console.log(`Hola, mi nombre es ${person.nombre}, tengo ${person.edad} años y soy ${person.profesion}`);
}

let persona = {
    nombre: 'Alejandro',
    edad: 27,
    profesion: 'Programador'
};

console.log(presentarPersona(persona));