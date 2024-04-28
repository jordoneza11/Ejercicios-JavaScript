// 9. Solicitar al usuario un número y mostrar si es divisible por 2.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// Si numero%2===0 Entonces
// Escribir "Su numero es divisible para 2"
// Sino
// Escribir "Su numero no es divisoble para 2"
const read = require('prompt-sync')();
let numero= read("Ingrese un numero")
if (numero%2===0){
    console.log("Su numero es divisible para 2")
}
else {
    console.log("Su numero no es divisible para 2")
}