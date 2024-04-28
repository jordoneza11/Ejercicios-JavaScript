// 12. Pedir 5 números y asignarlos en un arreglo
// Pseudocodigo
//Definir arreglo Numeros[5]
//Para i desde 1 hasta 5 hacer
//    Escribir "Por favor, ingresa el número ", i, ":"
//    Leer numero
//    Numeros[i] = numero
//FinPara
//Escribir "Los números ingresados son:"
//Para i desde 1 hasta 5 hacer
//    Escribir Numeros[i]
//FinPara
const read = require('prompt-sync')();
let numeros = [];

for (let i = 0; i < 5; i++) {
    numero=read("Ingresa el número " + (i + 1) );
     numero=parseFloat(numero)
    numeros.push(numero);
}
console.log("Los números ingresados son: " + numeros.join(", "));
