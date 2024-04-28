// 19. Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
//Pseudocodigo
//Inicio
// Definir arreglo[5] de enteros
// Leer arreglo[0]
// Leer arreglo[4]
// Si arreglo[0] > arreglo[4] Entonces
// Escribir "El primer elemento es mayor que el último elemento"
// Sino
// Escribir "El primer elemento no es mayor que el último elemento"
// Fin Si
//Fin
function compararElementos(arreglo) {    
if (arreglo[0] > arreglo[arreglo.length - 1]) {
    console.log("El primer elemento es mayor que el último elemento");
} else {
    console.log("El primer elemento no es mayor que el último elemento")
}
}
let arreglo = [5, 6, 7, 8, 9];
console.log(compararElementos(arreglo));