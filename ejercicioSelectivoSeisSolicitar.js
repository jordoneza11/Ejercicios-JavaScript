// 6. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// Pseudocodigo
// Escribir "Ingrese un caracter"
// Leer caracter
// Si caracter es igual a "a" o caracter es igual a "e" o caracter es igual a "i" o caracter es igual "o" o caracter es igual a "u" Entonces
// Escribir "Su caracter es una vocal"
// Sino
// Escribir "Su caracter es una consonante"
// Sino
// Escribir "Su caracter no es valido"
const read = require('prompt-sync')();
let caracter= read("Ingrese un caracter")
if (caracter==='a' || caracter==='e' || caracter==='i'|| caracter==='o' || caracter==='u'){
    console.log("Su caracter es una vocal")
}
else if (caracter >='a' && caracter <='z'){
    console.log("Su caracter es una consonante")
}
else {
console.log("Su caracter no es valido")
}