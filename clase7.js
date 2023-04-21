/* function primero() {
  console.log("PRIMERO");
}

function segundo() {
  console.log("SEGUNDO");
}

primero();
segundo(); */

/* function primero(segundo) {
  setTimeout(function () {
    console.log("PRIMERO");
    segundo();
  }, 5000);
}

function segundo() {
  console.log("SEGUNDO");
}

primero(segundo); */

//FOR EACH()

/* const pendientes = ["desafios", "preentregas", "asistencias", "book"]; */

// console.log(pendientes);

/* pendientes.forEach((pendiente, indice) => {
  console.log(`${indice}: ${pendiente}`);
}); */

//MAP()

/* pendientes.map((p, i) => {
  console.log(`${i}: ${p}`);
}); */

// REDUCE()

/* const carrito = [
  { nombre: "Monitor", precio: 1500 },
  { nombre: "TV", precio: 2000 },
  { nombre: "Teclado", precio: 500 },
  { nombre: "Mouse", precio: 200 },
]; */

/* // console.log(carrito);

let totalCompra = 0;

let resultado = carrito.reduce((accum, producto) => {
  return accum + producto.precio;
}, 0);

console.log(resultado); */

/* const carrito = [
  { nombre: "Monitor", precio: 1500 },
  { nombre: "TV", precio: 2000 },
  { nombre: "Teclado", precio: 500 },
  { nombre: "Mouse", precio: 200 },
];
 */
// FILTER()

/* let resultado = carrito.filter((producto) => producto.precio >= 1500);

let resultado2 = carrito.filter((producto) => producto.nombre === "TV"); */

/* console.log(resultado);
console.log(resultado2); */

//FIND()
/* let resultado3 = carrito.find((producto) => producto.nombre === "Teclado");

console.log(resultado3); */

// MATH

// const numero = 3.156;

/* const redondeo = Math.round(numero);
const redondeo2 = Math.ceil(numero); // hacia arriba
const redondeo3 = Math.floor(numero); // hacia abajo */

//valor absoluto
/* const numero2 = -89;
const valorAbsoluto = Math.abs(numero2);

console.log(valorAbsoluto); */

//pow => potenica
//sqrt => raiz

/* const numAleatorio = Math.random();

console.log(numAleatorio); */

//DATE

/* const ahora = new Date();
const inicial = new Date("2023-03-20");
const fin = new Date("1985-03-06");

console.log(ahora.getFullYear()); // año completo
console.log(ahora.getMonth()); // mes completo
console.log(ahora.getDate()); // dia completo
console.log(ahora.getHours()); // hora completo
console.log(ahora.getMinutes()); // minutos completo */
