// 9. Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// numeroEntero = ConvertirAEntero(numero)
// Escribir "Tabla de multiplicar del ", numeroEntero, ":"
// Para i desde 1 hasta 10 hacer:
// resultado = numeroEntero * i
// Escribir numeroEntero, " x ", i, " = ", resultado
// FinPara
// Solicitar al usuario un número
const read = require('prompt-sync')();
numero=read("Por favor, ingresa un número:");
numero = parseInt(numero);
console.log("Tabla de multiplicar del " + numero + ":");
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
