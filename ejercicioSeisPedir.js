//6. Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero1
// Escribir "Ingrese otro numero"
// Leer numero2
// resultado=numero1*numero2
// Escribir resultado
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
let resultado=numero1*numero2
console.log(resultado)
