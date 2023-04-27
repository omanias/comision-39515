let frutas = ["manzana", "pera", "durazno"]

// frutas.push("uvas")
// frutas.pop()
// frutas.shift()
// frutas.unshift("uvas")
// frutas.splice(1,2)

// let index =frutas.indexOf("durazno")


/* frutas.forEach((fruta, indice)=>{
    console.log(`${indice}: ${fruta}`)
}) */

/* frutas.map((f, i)=>{
    console.log(`${i}: ${f}`)
}) */

const carrito =[
    {nombre:"Producto A" , precio:500},
    {nombre:"Producto B" , precio:1000},
    {nombre:"Producto C" , precio:3000}
]

// let total = 

/* let resultado = carrito.reduce((acumulado, producto)=>{
    return acumulado + producto.precio
}, 0) */

/* let resultado = carrito.filter((producto)=> producto.precio >= 1000) */

/* const filtro = carrito.filter((producto)=> producto.nombre !== "Producto B") */


const buscado = carrito.find((p)=> p.nombre !== "Producto C")



// console.log(frutas)
