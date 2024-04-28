//10. Pedir al usuario dos números y mostrar el mayor.
// Pseudocodigo
// Escribir "Ingrese un numero"
// Leer numero1
// Escribir "Ingrese otro numero"
// Leer numero2
// Si numero1>numero2 Entonces
//   mayor=numero1
//   Sino
//   mayor=numero2
// FinSi
// Escribir "El numero mayor es " mayor
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
if (numero1>numero2){
    console.log("El numero mayor es " +numero1)
}
    else if (numero1<numero2){
        console.log("El numero mayor es " +numero2)
    }