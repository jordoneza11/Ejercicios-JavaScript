// 8. Pedir al usuario un número y mostrar si es múltiplo de 3.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// Si numero%3===0 Entonces
// Escribir "Su numero es multiplo de 3"
// Sino
// Escribir "Su numero no es multiplo de 3"
const read = require('prompt-sync')();
let numero= read("Ingrese un numero")
if (numero%3===0){
    console.log("Su numero es multiplo de 3")
}
else {
    console.log("Su numero no es multiplo de 3")
}