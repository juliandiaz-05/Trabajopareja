// Creamos un arreglo con 3 objetos producto
let productos = [
  { nombre: "Laptop", precio: 2500000, disponible: true },
  { nombre: "Mouse", precio: 50000, disponible: true },
  { nombre: "Impresora", precio: 600000, disponible: false }
];

// Recorremos con for...of y mostramos solo el nombre
for (let producto of productos) {
  console.log("Producto:", producto.nombre);
}
