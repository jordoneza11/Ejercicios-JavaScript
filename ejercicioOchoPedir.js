// 8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Pseudocodigo
// Escribir "Ingrese su nombre"
// Leer nombre
// Escribir "Hola, " nombre
// Escribir "Hola, " nombre
// Escribir "Hola, " nombre
const read = require('prompt-sync')();
nombre=read("Ingrese su nombre")
console.log("Hola, " +nombre)
console.log("Hola, " +nombre)
console.log("Hola, " +nombre)