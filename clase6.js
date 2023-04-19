/* const arreglo = ["Coder", 25, true];

const arreglo2 = ["🥙", "🍔", "🌭"];

//Accediendo a valores de la lista
console.log(arreglo[0]);

// Cambiando valores de la lista
arreglo[2] = false;

console.log(arreglo);

//Agregando elementos a la lista
arreglo[3] = 89;

console.log(arreglo);

const numeros = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < 5; index++) {
  console.log(numeros[index]);
}
 */
/* const miArray = ["Samsung", 1500, true];

console.log(miArray[1]); */

// PUSH

/* const carrito = [];

carrito.push("Producto A");
carrito.push("Producto B");
carrito.unshift("Producto C");

console.log(carrito);

//Eliminar el ultimo elemento del arreglo
// carrito.pop();

// Eliminar el primer elemento del arreglo
carrito.shift();
console.log(carrito); */

//SPLICE
//El primer parametro desde donde arranca, y el segundo indica cuantos elementos elimino del array

/* const alumnos = ["Micaela", "Guido", "Clemencia", "Silvio"];

// alumnos.splice(1, 2);

console.log(alumnos);

//JOIN
console.log(alumnos.join("* ")); */

//CONCAT

/* const bebidas = ["🧁", "🧉", "☕"];

const alimentos = ["🍕", "🌭", "🥐"];

const unidos = bebidas.concat(alimentos);

console.log(unidos); */

/* const alumnos = ["Micaela", "Guido", "Clemencia", "Silvio"]; */

// console.log(alumnos.indexOf("Carpi"));

// console.log(alumnos.includes("Clemencia"));

/* alumnos.reverse();

console.log(alumnos); */

// EJEMPLO PARA CARGAR DATOS Y ALMACENARLOS EN UN ARRAY

/* const listaNombres = [];

let cantidad = 5;

do {
  let entrada = prompt("Ingrese un nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
} while (listaNombres.length != cantidad);

console.log(listaNombres); */

/* const alumnos = ["Micaela", "Guido", "Clemencia", "Silvio"];

const eliminar = (alumno) => {
  let index = alumnos.indexOf(alumno);

  if (index != -1) {
    alumnos.splice(index, 1);
  }
};

eliminar("Guido");

console.log(alumnos); */

//ARRAY DE OBJETOS

/* const objeto1 = {
  id: 1,
  producto: "TV",
};

const array = [
  objeto1,
  {
    id: 2,
    producto: "Monitor",
  },
];

array.push({
  id: 3,
  producto: "Teclado",
});

console.log(array); */

// FOR OF...

const productos = [
  { id: 1, marca: "A" },
  { id: 2, marca: "B" },
  { id: 3, marca: "C" },
];

// console.log(productos);

for (const x of productos) {
  console.log(x.id);
  console.log(x.marca);
}
