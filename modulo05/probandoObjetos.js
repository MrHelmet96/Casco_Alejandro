
//definición de una clase (estructura o maqueta de futuros objetos)
class Animal {
    nombre;
    color;
    tipo;
    constructor(name, color, type){
        this.nombre = name;
        this.color = color;
        this.tipo = type;
    }

    //metodos
    presentarme() {
        console.log(`Hola, soy un ${this.tipo}, me llaman ${this.nombre} y soy de color ${this.color}`);
    }
}

a1 = new Animal('Olivia', 'gris', 'gato');
a2 = new Animal('Rufina', 'multicolor', 'gato');
a3 = new Animal('Treisi', 'negro', 'perro');

console.log(a1.presentarme());