// 1. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// Si numero>10 Entonces
// Escribir numero "es mayor a 10"
// Sino 
// Escribir numero "es menor a 10"
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
if (numero>10){
    console.log("Su numero es mayor a 10")
}
    else if (numero<10){
        console.log("Su numero es menor a 10")
    }
