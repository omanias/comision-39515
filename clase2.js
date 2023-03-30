/* if(condicion){
    //respuesta
}else{
    //otra respuesta
} */

/* const puntaje = 1000

if (puntaje !== "1000"){
    console.log(true)
}else{
    console.log(false)
} */

/* const totalDeMiCompra = 1500

const billeteraFinDeMes = 1000


if (totalDeMiCompra > billeteraFinDeMes){
    console.log("Ganador")
}else{
    console.log("Vuelva pronto")
} */


/* const efectivo = 300
const credito = 400
const totalPagar = 600
const disponible = efectivo + credito

if (efectivo > totalPagar || credito > totalPagar || disponible < totalPagar) {
    console.log("Podemos comprar")
} else {
    console.log("Fondos insuficientes")
}
 */


//OPERADORES LÓGICOS

//== igualdad
// > mayor que
// < menor que
// != distinto
// >= mayor o igual
// <= menor o igual
// === estrictamente igual
// !== estrictamente diferente
// && AND
// || OR

/* 
let numero = "100"

if(numero !== 50){
    console.log("distinto a 50")
}else{
    console.log("Igual a 50")

} */

/* const texto = prompt("Ingrese la palabra 'CoderHouse'")

if (texto === "CoderHouse") {
    alert("La respuesta es correcta")
} else {
    alert("Respuesta incorrecta")
} */

/* let precio = Number(prompt("Ingrese el precio del producto"))

if (precio >= 100) {
    alert("El producto es caro")
} else {
    alert("El producto está al alcance del bolsillo del profe")
} */

//TABLAS DE LA VERDAD

/*
&&

X | Y | X && Y
T | T | T
T | F | F
F | T | F
F | F | F

const a = 10
console.log(a > 5 && a > 20)
*/

/*
||

X | Y | X || Y
T | T | T
T | F | T
F | T | T
F | F | F

let a = 8
console.log(a < 5 || a > 15)
*/

/* let precio = prompt("Ingrese el precio de la hamburguesa")

if (precio > 1000){
    console.log("Bastante cara")
} else if( precio > 500){
    console.log("yyyy... puede ser")
} else{
    console.log("Buena, bonita, barata")
} */

/* const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")

if ((nombre != "") && (apellido != "")){
    alert(nombre + " " + apellido)
}else{
    alert("Faltan datos")
} */


/* let burger = 5500 // Utilizar prompt() para pedir datos al usuario
if (burger<3000){
        console.log("mejoramos la Burger o 2 burger")
}else if((burger>3000) && (burger<5000)){
        console.log("compramos 1")
}else{
        console.log("nos la afanamo")
} */

/* 
BUENA PRACTICA
const NOMBRE = "Coder"
let numero = 1500 */