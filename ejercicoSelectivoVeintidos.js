// 22. Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// Pseudocodigo
//Inicio
// arreglo = [1, 2, 3, 4, 5]
// suma = 0
// Para cada elemento en arreglo hacer
// suma = suma + elemento
// Mostrar "La suma de los elementos del arreglo es " +suma
//Fin
let arreglo = [11, 18, 44, 66, 100];
let suma = 0;
for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
}
console.log("La suma de los elementos del arreglo es: " + suma);

