function invierteCadena(cadena) {
    return cadena.split("").reverse().join("");
  }
  
  const texto = prompt("Ingrese un texto a elección");
  const textoInvertido = invierteCadena(texto);
  console.log(textoInvertido);