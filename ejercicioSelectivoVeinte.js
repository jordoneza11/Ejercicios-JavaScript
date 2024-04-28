// 20. Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.
// Pseudocodigo
//Inicio
// Definir arreglo[5] de enteros
// Leer arreglo[0]
// Leer arreglo[4]
// Si arreglo[0] es par Y arreglo[4] es impar Entonces
//  Escribir "El primer elemento es par y el último elemento es impar."
// Sino
// Escribir "El primer elemento no es par o el último elemento no es impar."
// Fin Si
//Fin
function verificarParImpar(arreglo) {
let primerElemento = arreglo[0];
let ultimoElemento = arreglo[arreglo.length - 1];
    
if (primerElemento % 2 === 0 && ultimoElemento % 2 !== 0) {
    console.log("El primer elemento es par y el último elemento es impar");
} else {
    console.log("El primer elemento no es par o el último elemento no es impar");
}
}
let arreglo = [6, 9, 10, 12, 15];
console.log(verificarParImpar(arreglo));
