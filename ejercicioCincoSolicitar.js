//5. Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Pseudocodigp
// Escribir "Ingrese su edad"
// Leer edad
// resultado=edad+1
// Escribir "El proximo año tendra una edad de " edad "años"
const read = require('prompt-sync')();
edad=read("Ingrese su edad")
edad= parseFloat(edad)
let resultado=edad+1
console.log("El proximo año usted tendra una edad de " +resultado, "años")
