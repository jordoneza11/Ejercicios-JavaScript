// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// Pseudocodigo
//Definir arreglo Elementos[5]

//Elementos[1] = 10
//Elementos[2] = 20
//Elementos[3] = 30
//Elementos[4] = 40
//Elementos[5] = 50
//Escribir "El primer elemento es:", Elementos[1]
//Escribir "El elemento del medio es:", Elementos[3]
//Escribir "El último elemento es:", Elementos[5]
// Definir un arreglo de 5 elementos
let elementos = [10, 20, 30, 40, 50];
console.log("El primer elemento es:", elementos[0]);
console.log("El elemento del medio es:", elementos[Math.floor(elementos.length / 2)]);
console.log("El último elemento es:", elementos[elementos.length - 1]);
