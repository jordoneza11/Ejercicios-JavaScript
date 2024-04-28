//21. Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// Pseudocodigo
//Inicio
// arreglo=(10, 80, 130)
// mayor= arreglo(0)
// Si arreglo(1)>mayor Entonces
// mayor=arreglo(1)
//FinSi
// Si arreglo(2)>mayor Entonces
// mayor= arreglo(2)
//FinSi
// Escribir "El mayor elemento del arreglo es " +mayor
let arreglo = [10, 80, 130];
let mayor = arreglo[0];
if (arreglo[1] > mayor) {
    mayor = arreglo[1];
}
if (arreglo[2] > mayor) {
    mayor = arreglo[2];
}
console.log("El mayor elemento del arreglo es " +mayor);
