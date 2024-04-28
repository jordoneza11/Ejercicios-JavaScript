// 2.	Pedir dos palabras y presentarlas concatenadas
// Pseudocodigo
// Escribir "Ingrese una palabra"
// Leer palabra1
// Escribir "Ingrese otra palabra"
// Leer palabra2
// concatenacion=palabra1+palabra2
// Escribir "La concatenacion de las dos palabras es " palabra1 + "" + palabra2
const read = require('prompt-sync')();
palabra1=read("Ingrese una palabra")
palabra2=read("Ingrese una segunda palabra")
concatenacion=palabra1+ " " +palabra2
console.log("La concatenacion de esas dos palabras es " +concatenacion)