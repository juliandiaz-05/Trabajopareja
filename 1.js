//1
// Creamos un arreglo con 5 aprendices
let asistencia = ["Ana", "Luis", "Carlos", "María", "Sofía"];

// Agregamos un nuevo nombre al final con push()
asistencia.push("Pedro");

// Eliminamos el primer nombre con shift()
asistencia.shift();

// Mostramos el arreglo final y la cantidad de elementos
console.log("Lista final:", asistencia);
console.log("Cantidad total de aprendices:", asistencia.length);
