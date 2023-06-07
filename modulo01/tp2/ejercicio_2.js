// Completar las condiciones de los IF del siguiente script para que los mensajes se muestren siempre de forma correcta:

var num1 = 3;
var num2 = 7;

if (num2 > num1) { // SI num2 es mayor que num1, se muestra el mensaje por consola:
    console.log("num1 no es mayor que num2");
}

if (num2 >= 0) { // SI num2 es mayor o igual que 0, se muestra el mensaje por consola:
    console.log("num2 es positivo");
}

if (num1 < 0 || num1 != 0) { // SI num1 es menor que 0 o distinto de 0, se muestra el mensaje por consola:
    console.log("num1 es negativo o distinto de cero");
}

if ((num1 + 1) >= num2) { // SI num1 + 1 es mayor o igual que num2, se muestra el mensaje por consola:
    console.log("Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2");
}