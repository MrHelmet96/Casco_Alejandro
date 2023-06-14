

var sumar = function (x,y) {
    return x + y;
}

var restar = function (x,y) {
    return x - y;
}

var calculadora = function (accion, n1, n2){
    console.log(accion(n1,n2));
}

calculadora(restar, 10, 25);