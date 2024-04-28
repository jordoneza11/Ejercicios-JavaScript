//2. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Pseudocodigo
// Escribir "Ingrese su edad"
// Leer edad
// Si edad>18 Entonces
// Escribir "Usted es mayor de edad"
// Sino
// Escribir "Usted es menor de edad"
const read = require('prompt-sync')();
let edad= read("Ingrese su edad")
if (edad>18){
    console.log("Usted es mayor de edad")
}
    else if (edad<18){
        console.log("Usted es menor de edad")
}