function eliminarDuplicados(array) {
    return Array.from(new Set(array));
  }
  
  const numeros = [1, 2, 3, 3, 4, 5, 5, 6,6,,7,7,7,7,8,9,10,10,11];
  const numerosSinDuplicados = eliminarDuplicados(numeros);
  console.log(numerosSinDuplicados);
  