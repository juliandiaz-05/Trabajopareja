// Arreglo inicial de frutas
let frutas = ["Manzana", "Pera", "Uva"];

// Agregamos "Banano" al inicio con unshift()
frutas.unshift("Banano");

// Eliminamos el último elemento con pop()
frutas.pop();

// Mostramos el arreglo final
console.log("Arreglo final de frutas:", frutas);

// Recorremos el arreglo con for...of
console.log("Recorrido con for...of:");
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}
