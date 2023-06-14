
//definición de una clase (estructura o maqueta de futuros objetos)
class Animal {

    //atributos o caracteristicas del objeto
    nombre;
    color;
    tipo;

    //funcion o método invocado al momento de instaciar una clase, es el encargado de crear o dar existencia a un nuevo objeto de dicha clase
    constructor(name, color, type){
        this.nombre = name;
        this.color = color;
        this.tipo = type;
    }

    //metodos o comportamientos
    presentarme() {
        console.log(`Hola, soy un ${this.tipo}, me llaman ${this.nombre} y soy de color ${this.color}`);
    }
}

// variable que será el objeto como tal, de la clase que estoy instanciando
a1 = new Animal('Olivia', 'gris', 'gato');
a2 = new Animal('Rufina', 'multicolor', 'gato');
a3 = new Animal('Treisi', 'negro', 'perro');

console.log(a1.presentarme());