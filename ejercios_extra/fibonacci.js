//Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado

const limite = parseInt(prompt("Ingrese un número entre 1 y 100:"));

if (isNaN(limite) || limite < 1 || limite > 100) {
  console.log("El número ingresado no es válido.");
} else {
  let num1 = 0;
  let num2 = 1;
  let siguienteNum;

  document.write("Serie de Fibonacci: </br>");

  while (num1 <= limite) {
    document.write(num1 + "</br>");
    siguienteNum = num1 + num2;
    num1 = num2;
    num2 = siguienteNum;
  }
}
