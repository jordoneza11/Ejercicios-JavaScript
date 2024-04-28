//3. Solicitar al usuario dos números y mostrar su suma.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero1
// Escribir "Ingrese otro numero"
// Leer numero2
// resultado=numero1+numero2
// Escribir "El resultado de la suma de los numeros es " resultado
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)
let resultado=numero1+numero2
console.log("El resultado de la suma de los dos numeros es " +resultado)