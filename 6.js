// Creamos un objeto que represente un termo
let termo = {
  color: "Azul",
  capacidad: "500ml",
  material: "Acero inoxidable",
  estado: "Usado"
};

// Recorremos claves y valores con Object.entries() y for...of
for (let [clave, valor] of Object.entries(termo)) {
  console.log(clave, ":", valor);
}
