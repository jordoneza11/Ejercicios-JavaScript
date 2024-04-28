// 3. Pedir al usuario un número y mostrar si es par o impar.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// Si numero/2=0 Entonces
// Escribir "Su numero es par"
// Sino
// Escribir "Su numero es impar"
// FinSi
const read = require('prompt-sync')();
var numero= read("Ingrese un numero")
if (numero%2===0){
    console.log("Su numero es par")
}
else {
    console.log("Su numero es impar")
}