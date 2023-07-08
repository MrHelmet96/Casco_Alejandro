// Crea un objeto llamado cuentaBancaria con las propiedades saldo y titular. Luego, escribe métodos depositar y retirar que actualicen el saldo de la cuenta según las cantidades proporcionadas

const cuentaBancaria = {
    saldo: 0,
    titular: "",
  
    depositar: function(cantidad) {
      this.saldo += cantidad;
    },
  
    retirar: function(cantidad) {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
      } else {
        console.log("No hay suficiente saldo en la cuenta.");
      }
    }
  };
  
  // Ejemplo de uso:
  cuentaBancaria.titular = "John Doe";
  
  console.log("Saldo inicial:", cuentaBancaria.saldo); // Output: 0
  
  cuentaBancaria.depositar(100);
  console.log("Saldo después de depositar 100:", cuentaBancaria.saldo); // Output: 100
  
  cuentaBancaria.retirar(50);
  console.log("Saldo después de retirar 50:", cuentaBancaria.saldo); // Output: 50
  
  cuentaBancaria.retirar(75); // No hay suficiente saldo en la cuenta.
  console.log("Saldo después de intentar retirar 75:", cuentaBancaria.saldo); // Output: 50
  