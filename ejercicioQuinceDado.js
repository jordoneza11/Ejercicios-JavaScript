//15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
// Pseudocodigo
// arreglo = ()
// arreglo = [1, 2, 3, 4, 5]
// Mostrar "Arreglo elementos: ", arreglo
// temp = arreglo[0]
// arreglo[0] = arreglo[4]
// arreglo[4] = temp
// Mostrar "Arreglo después del intercambio: ", arreglo

let arreglo = [1, 2, 3, 4, 5];
console.log("Arreglo original:", arreglo);
let temp = arreglo[0];
arreglo[0] = arreglo[4];
arreglo[4] = temp;
console.log("Arreglo después del intercambio:", arreglo);
