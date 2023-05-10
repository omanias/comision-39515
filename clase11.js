/* let numero;

numero = 1
// let resultado = numero + numero
numero++
//console.log(numero)
for (let i = 1; i < 10; i++) {
    console.log(i)
} */

/*
if (temperatura < 30) {
    console.log("Templado")
} else {
    console.log("caluroso")
} */


/* let temperatura = 35
temperatura < 30 ? console.log("Templado") : console.log("Caluroso") */

// CONDICIONES MULTIPLES
/*
let edad = prompt("Ingrese su edad")

let mensaje =

    (edad < 10) ? "Eres un niño" :
        (edad < 20) ? "Eres un adolscente" :
            (edad < 25) ? "Eres un adulto" :
                "Edad inusual"

console.log(mensaje) */


// const cursos = ["Javascript"]

/* if (cursos.length === 0) {
    console.log("No hay cursos")
} else {
    console.log(cursos)
} */

// cursos.length === 0 && (console.log("No hay cursos"))

/*
carrito.length > 0 && resto del codigo con formulario

//MUESTRO UN FORMULARIO
*/

/* const usuario1 = {
    nombre: "Clemencia",
    edad: 20
}

const usuario2 = null

console.log(usuario1 || "El usuario no existe")
console.log(usuario2 || "El usuario no existe") */

/* console.log(0 || "false") // false
console.log(null || "false") // false
console.log(undefined || "false") // false
console.log("" || "false") // false
console.log(NaN || "false") // false
console.log(false || "false") // false
console.log(true || "false") // true
console.log(50 || "false") // 50
console.log("CoderHouse" || "false") // Coderhouse */

/* let carrito

let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito"))

if (carritoLocalStorage) {
    carrito = carritoLocalStorage
} else {
    carrito = []
}
 */
/*
const carrito = JSON.parse(localStorage.getItem("carrito")) || [] */

//ACCESO CONDICIONAL A UN OBJETO

/* const usuario1 = {
    nombre: "Matias",
    edad: 21,
    cursos: {
        Javascript: "Aprobado"
    }
}

console.log(usuario1?.cursos?.Javascript || "la propiedad no existe")
console.log(usuario1?.cursos?.nodejs || "la propiedad no existe") */

// SPREAD OPERATOR

/* const frutas = ["🍍", "🍓", "🍎"]

const bebidas = ["🧉", "☕"]


// const ambos = [...frutas, ...bebidas]

frutas.push(...bebidas)

console.log(frutas) */

/*
const usuario1 = {
    nombre: "Matias",
    edad: 21,
    cursos: {
        Javascript: "Aprobado"
    }
}


const usuario2 = {
    profe: "El tio Omar",
    ...usuario1
}

console.log(usuario2)
 */


// DESESTRUCTURACION

/* const usuario1 = {
    nombre: "Matias",
    edad: 21,

}

// const nombreUsuario = usuario1.nombre

const { nombre } = usuario1

 */


/* const nombres = ["Lucas", "Ana", "Clemencia"]

const [, Ana, Clemencia] = nombres

/* console.log(a)
console.log(b) */
// console.log(x)
// console.log(Clemencia)













