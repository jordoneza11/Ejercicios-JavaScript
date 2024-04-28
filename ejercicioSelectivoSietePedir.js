// 7. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
// Pseudocodigo
// Escribir "Ingrese un nombre"
// Leer nombre1
// Escribir "Ingrese otro nombre"
// Leer nombre2
// Si nombre1>nombre2 Entonces
// Escribir nombre1+ "es mayor a" +nombre2
// Sino
// Escribir nombre2+ "es menor a" +nombre1
const read = require('prompt-sync')();
let nombre1= read("Ingrese un nombre")
let nombre2= read("Ingrese otro nombre")
if (nombre1>nombre2){
    console.log(nombre1+ " es mayor a " +nombre2)
}
else if (nombre1<nombre2){
    console.log(nombre2+ " es menor que " +nombre1)
}
else if (nombre1===nombre2){
    console.log("Sus noombres son iguales")
}