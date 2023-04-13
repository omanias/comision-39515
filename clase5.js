/* const nombre = "Monitor de 24 pulgadas";
const precio = 1500;
const disponible = true; */

//Object literal
/* const producto = {
  //key / clave : value / valor
  nombre: "Monitor de 24 Pulgadas",
  precio: 1500,
  disponible: true,
};
 */
/* console.log(producto.nombre);
console.log(producto.precio); */

/* producto.disponible = false;
producto.nombre = "teclado Genius"; */

/* console.log(producto["disponible"]);
console.log(producto.nombre); */

// Agregar propiedades a un objeto
// producto.imagen = "imagen.jpg";

//Eliminar propiedades de un objeto
// delete producto.nombre;

// console.log(producto);

// Destructuring / desestructuracion

/* const nombreProducto = producto.nombre;
console.log(nombreProducto); */

/* const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible); */

/* const persona = {
  nombre: "Juan",
  edad: 30,
  ocupacion: "Programador",
  saludar: function () {
    console.log(`Mi nombre es ${this.nombre}`);
  },
};

persona.saludar(); */

/* const cadena = "bienvenidos a coderhouse ";

console.log(cadena.length);
// console.log(cadena.toLowerCase());
console.log(cadena.toUpperCase());
 */

// CONSTRUCTOR / PLANTILLA - TEMPLATE

/* function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

const producto2 = new Producto("Teclado", 1000, false);

console.log(producto2); */

function crearObjetoCuenta(nombre, apellido, saldo) {
  this.nombreCuenta = nombre = prompt("Ingrese su nombre");
  this.apellidoCuenta = apellido = prompt("Ingrese su apellido");
  this.saldoCuenta = saldo = Number(prompt("Ingrese el saldo"));
  this.mostrarCuenta = function () {
    return `Nombre: ${this.nombreCuenta}, apellido: ${this.apellidoCuenta}, saldo: ${this.saldoCuenta}`;
  };
}

const cuenta1 = new crearObjetoCuenta();

console.log(cuenta1.mostrarCuenta());
