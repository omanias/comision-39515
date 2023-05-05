
/* const enJSON = '{"nombre": "Silvio", "edad": 38, "Casado": true, "ciudad": "Buenos Aires"}'

const obj = JSON.parse(enJSON)

console.log(enJSON)
console.log(obj) */

/* 
const curso = {
    titulo: "Javascript",
    duracion: 17,
    finalizado: false,
    stack: ["ReactJs", "NodeJs"]
}


const aJSON = JSON.stringify(curso)

console.log(curso)

console.log(aJSON) */

// DIFERENCIA ENTRE LOCALSTORAGE Y SESSIONSTORAGE

/* localStorage.setItem("curso", "Javascript")

sessionStorage.setItem("curso", "Java") */

/* const curso = {
    titulo: "Javascript",
    duracion: 17,
    finalizado: false,
    stack: ["ReactJs", "NodeJs"]
}

const cursoStr = JSON.stringify(curso)
localStorage.setItem("curso2", cursoStr)

console.log(cursoStr) */

/* const fullstack = ["Desarrollo Web", "Javascript", "reactJs", "nodeJs"]

const fullstackStr = JSON.stringify(fullstack)
localStorage.setItem("fullstack", fullstackStr) */

/* 
OBJECT, OBJECT
const curso = {
    titulo: "Javascript",
    duracion: 17,
    finalizado: false,
    stack: ["ReactJs", "NodeJs"]
}

localStorage.setItem("error", curso) */

/* 
const curso = localStorage.getItem("curso2")
console.log(JSON.parse(curso)) */

/* const cursosArray = JSON.parse(localStorage.getItem("fullstack"))
console.log(cursosArray)
cursosArray.push("Bases de datos")
localStorage.setItem("fullstack", cursosArray) */

/* const nombreUsuario = prompt("Ingrese nombre de usuario")

const nombreStr = JSON.stringify(nombreUsuario)

localStorage.setItem("Nombre del usuario", nombreStr) */


/*
1) ARRAY U OBJETO
2) CONVERTIR A JSON
3) GUARDAR EN STORAGE

1) OBTENER DEL STORAGE
2) AGREGAR AL ARRAY UN ELEMENTO
3) ENVIO AL LOCALSTORAGE


*/

