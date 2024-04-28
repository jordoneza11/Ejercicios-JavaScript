// 11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Pseudocodigo
// Escribir "Ingrese una distancia en metros"
// Leer distanciaMetros
// distanciaCentimetros= distanciaMetros*100
// Escribir "Su distancia en centimetros es " distanciaCentimetros
const read = require('prompt-sync')();
distanciaMetros=read("Ingrese una distancia en metros")
let distanciaCentimetros= distanciaMetros*100
console.log("La distancia en centimetros es " +distanciaCentimetros+ " centimetros")
