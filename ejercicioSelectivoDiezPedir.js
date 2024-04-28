// 10. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero
// Si numero>100 Entonces
// Escribir "Su numero es mayor a 100"
// Sino
// Escribir "Su numero es menor a 100"
// Sino Si numero=100 Entonces
// Escribir "Su numero es igual a 100"
// FinSino
const read = require('prompt-sync')();
let numero= read("Ingrese un numero")
if (numero>100){
    console.log("Su numero es mayor a 100")
}
else if (numero<100){
    console.log("Su numero es menor a 100")
}
else if (numero===100) {
    console.log("Su numero es igual a 100")
}