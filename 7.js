// Arreglo con edades de 5 personas
let edades = [15, 18, 22, 16, 25];

// Recorremos con for...of y mostramos solo mayores de edad
for (let edad of edades) {
  if (edad >= 18) {
    console.log("Mayor de edad:", edad);
  }
}
