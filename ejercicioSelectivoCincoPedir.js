// 5. Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero1
// Escribir "Ingrese otro numero"
// Leer numero2
// Si numero1=numero2 Entonces
// Escribir "Sus numeros son iguales"
// Sino 
// Escribir "Sus numeros son diferentes"
// FinSi
const read = require('prompt-sync')();
let numero1= read("Ingrese un numero")
let numero2= read("Ingrese otro numero")
if (numero1===numero2){
    console.log("Sus numeros son iguales")
}
else{
    console.log("Sus numeros son diferentes")
}