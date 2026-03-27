// =======================
// Ejercicios Prácticos JS
// =======================

// 1. Lista de asistencia
let asistencia = ["Ana", "Luis", "Carlos", "María", "Sofía"];
asistencia.push("Pedro"); // Agregar un nuevo nombre al final
asistencia.shift();       // Eliminar el primero
console.log("Lista final:", asistencia);
console.log("Cantidad total de aprendices:", asistencia.length);

// ------------------------------------------------------------

// 2. Inventario de frutas
let frutas = ["Manzana", "Pera", "Uva"];
frutas.unshift("Banano"); // Agregar al inicio
frutas.pop();             // Eliminar el último
console.log("Arreglo final de frutas:", frutas);

console.log("Recorrido con for...of:");
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}

// ------------------------------------------------------------

// 3. Notas de actividades
let notas = [3.5, 4.0, 2.8, 3.9, 4.5, 3.2];
let suma = 0;
for (let i = 0; i < notas.length; i++) {
  suma += notas[i]; // Acumular cada nota
}
let promedio = suma / notas.length;
console.log("Promedio de notas:", promedio);

// ------------------------------------------------------------

// 4. Características de un celular
let celular = {
  marca: "Samsung",
  modelo: "Galaxy S21",
  año: 2021,
  estado: "Nuevo"
};
console.log("Marca:", celular.marca);
console.log("Modelo:", celular.modelo);
console.log("Año:", celular.año);
console.log("Estado:", celular.estado);

// ------------------------------------------------------------

// 5. Lista de tareas
let tareas = [];
tareas.push("Estudiar JavaScript");
tareas.push("Hacer ejercicio");
tareas.push("Leer un libro");
tareas.pop(); // Eliminar la última tarea
console.log("Lista de tareas:", tareas);

// ------------------------------------------------------------

// 6. Objeto personal
let termo = {
  color: "Azul",
  capacidad: "500ml",
  material: "Acero inoxidable",
  estado: "Usado"
};
for (let [clave, valor] of Object.entries(termo)) {
  console.log(clave, ":", valor);
}

// ------------------------------------------------------------

// 7. Control de edades
let edades = [15, 18, 22, 16, 25];
for (let edad of edades) {
  if (edad >= 18) {
    console.log("Mayor de edad:", edad);
  }
}

// ------------------------------------------------------------

// 8. Registro de un libro
let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  paginas: 417,
  genero: "Novela"
};
console.log(`El libro '${libro.titulo}' del autor ${libro.autor} pertenece al género ${libro.genero}.`);

// ------------------------------------------------------------

// 9. Arreglo de objetos (productos)
let productos = [
  { nombre: "Laptop", precio: 2500000, disponible: true },
  { nombre: "Mouse", precio: 50000, disponible: true },
  { nombre: "Impresora", precio: 600000, disponible: false }
];
for (let producto of productos) {
  console.log("Producto:", producto.nombre);
}

// ------------------------------------------------------------

// 10. Clasificación por tipo de estructura
// a. Lista de colores favoritos → Arreglo
let colores = ["Rojo", "Verde", "Azul"];
console.log("Colores favoritos:", colores);

// b. Información completa de un estudiante → Objeto
let estudiante = {
  nombre: "Juan",
  edad: 20,
  carrera: "Ingeniería",
  correo: "juan@example.com"
};
console.log("Estudiante:", estudiante);

// c. Precios de diferentes camisetas → Arreglo
let preciosCamisetas = [30000, 45000, 50000];
console.log("Precios de camisetas:", preciosCamisetas);

// d. Descripción de un computador portátil → Objeto
let portatil = {
  marca: "Dell",
  memoriaRAM: "16GB",
  procesador: "Intel i7",
  almacenamiento: "512GB SSD"
};
console.log("Computador portátil:", portatil);
