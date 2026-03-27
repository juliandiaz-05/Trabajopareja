// Arreglo con 6 notas numéricas
let notas = [3.5, 4.0, 2.8, 3.9, 4.5, 3.2];

// Variable para acumular la suma
let suma = 0;

// Recorremos con for tradicional
for (let i = 0; i < notas.length; i++) {
  suma += notas[i]; // sumamos cada nota
}

// Calculamos el promedio
let promedio = suma / notas.length;
console.log("Promedio de notas:", promedio);
