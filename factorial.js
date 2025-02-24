// Función para solicitar un número válido al usuario
function solicitarNumero() {
    let numero;
  
    // Validar que el dato ingresado sea un número válido
    while (true) {
      let entrada = prompt("Ingresa un número entero positivo:");
      numero = parseInt(entrada);
  
      if (!isNaN(numero) && numero >= 0) {
        break; // Sale del ciclo si la entrada es válida
      } else {
        alert("Error: Debes ingresar un número entero positivo válido.");
      }
    }
  
    return numero;
  }
  
  // Función para calcular el factorial de un número
  function calcularFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  // Ejecutar el programa
  let numero = solicitarNumero();
  let resultado = calcularFactorial(numero);
  
  // Mostrar el resultado en el DOM
  document.getElementById("resultado").innerText = `El factorial de ${numero} es ${resultado}.`;
  