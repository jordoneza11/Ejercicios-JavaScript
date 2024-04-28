// 4. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// Si numero>0 Entonces
// Escribir "Su numero es positivo"
// Sino Si numero<0 Entonces 
// Escribir "Su numero es negativo"
const read = require('prompt-sync')();
let numero= read("Ingrese un numero")
if (numero>0){
    aconsole.log("Su numero es positivo")
}
else if (numero<0){
    console.log("Su numero es negativo")
}