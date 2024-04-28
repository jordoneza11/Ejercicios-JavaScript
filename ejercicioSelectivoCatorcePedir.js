// 14. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Pseudocodigo
//Inicio
// Escribir "Ingrese la nota de su examen"
// Leer nota
// Si nota>60 Entonces
// Escribir "Usted aprobo el examen"
// Sino
// Escribir "Usted reprobo el examen"
//Fin
const read = require('prompt-sync')();
let nota= read("Ingrese la nota de su examen")
if (nota>60){
    console.log("Usted aprobo el examen")
}
else{
    console.log("Usted reprobo el examen")
}
