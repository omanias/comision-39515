// FUNCTION DECLARATION

/* function mostrarMensaje() {
  console.log("saludos");
}

mostrarMensaje(); */

/* function solicitarNombre() {
    let nombre = prompt("ingrese su nombre");
    console.log(`El nombre del usuario es ${nombre}`);
}

solicitarNombre(); */

/* function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
  console.log(resultado);
}

sumar(1, 3);
sumar(8, 4);
sumar(7, 5);
sumar(9, 11);
sumar(21, 3); */

/* let numero1 = Number(prompt("ingrese un numero"));
let numero2 = Number(prompt("ingrese otro numero"));

function suma(a, b) {
  return numero1 + numero2;
}

console.log(suma(numero1, numero2)); */

/* function saludar(nombre, apellido) {
  console.log(`Saludos ${nombre} ${apellido}`);
}

saludar("Coder", "House"); */

// FUNCTION EXPRESSION

/* const aprendiendo = function () {
  return "aprendiendo js";
};

console.log(aprendiendo()); */

/* const aprendiendo2 = () => "Aprendiendo";

console.log(aprendiendo2()); */

/* const resta = (a, b) => a - b;

console.log(resta(20, 10));
 */

/* let numero1;
let numero2;

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
      break;
    case "-":
      return primerNumero - segundoNumero;
      break;
    case "*":
      return primerNumero * segundoNumero;
      break;
    case "/":
      return primerNumero / segundoNumero;
      break;
    default:
      return 0;
      break;
  }
}

console.log(calculadora(20, 30, "*")); */

//AMBITOS DE LAS VARIABLES

/* let mensaje = "Ambito global";

function crearMensaje() {
  let mensaje = "Ambito local";
}

console.log(mensaje); */

/* let usuario = prompt("ingrese");

function iniciarApp() {
  console.log("Iniciando aplicacion");

  segundaFuncion();
}

iniciarApp();
function segundaFuncion() {
  console.log("Segunda funcion");

  usuarioAutenticado(usuario);
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario...");
  console.log(`usuario autenticado: ${usuario} `);
} */
