// Se declaran los números y la operación mediante prompt
let num1 = parseInt(prompt("Ingresar primer numero"));
let num2 = parseInt(prompt("Ingresar segundo numero"));
let operacion = prompt("Ingresar operacion que se quiere realizar mediante simbolos (*, +, -, /)");

// Objeto que representa una operación
let operacionObj = {
  num1: num1,
  num2: num2,
  operacion: operacion
};

// Array que almacenará todas las operaciones realizadas
let historialOperaciones = [];

// Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No es posible dividir por cero.";
  }
}

// Función principal de la calculadora
function calculadora(operacion, a, b) {
  switch (operacion) {
    case "+":
      return sumar(a, b);
    case "-":
      return restar(a, b);
    case "*":
      return multiplicar(a, b);
    case "/":
      return dividir(a, b);
    default:
      return "Error";
  }
}

// Calculo de resultado
var resultado = calculadora(operacion, num1, num2);

// Guardar la operación en el historial
historialOperaciones.push(operacionObj);

// Mostrar mensaje
alert("Resultado: " + resultado);

// Mostrar historial de operaciones
console.log("Historial de Operaciones:", historialOperaciones);

  

