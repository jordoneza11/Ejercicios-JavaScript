// 11. Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Pseudocodigo
// Escribir "Ingrese un digito"
// Leer numero
// Si Longitud(numero)=1 Entonces
// Escribir "Su numero es de un solo digito"
// Sino
// Escribir "Su numero no es de un solo digito"
// FinSi
const read = require('prompt-sync')();
let numero= read("Ingrese un digito")
if (numero.length===1) {
    console.log("Su numero es de un solo digito")
}
else {
    console.log("Su numero tiene mas de un digito")
}