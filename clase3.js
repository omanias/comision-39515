//WHILE

/* while(condicion){
    //se genere determinada funcionalidad
} */

/* let i = 10

while (i <= 5){
    console.log(i)
    i++;
} */

/* let entrada = prompt("Ingrese texto o ESC para interrumpir")

let texto = ""

while (entrada != "ESC" && entrada != "esc"){
    texto += entrada + " "
    entrada = prompt("Ingrese texto o ESC para interrumpir")
}

alert(texto) */

//DO WHILE

/* do {
    console.log("ciclo")
}while (condicion) */

/* let y = 60

do {
    console.log(`el valor de la variable es: ${y}`)
    y++
} while (y <=50 ); */

//FOR

// for (desde ; hasta ; actualizacion ){
//cuerpo
//}

/* for (let i = 0; i <= 10; i++){
    alert(`El valor de la variable es: ${i}`) 
} */

/* let tabla = Number(prompt("Ingrese la tabla de multiplicar"))

for (let i = 1 ; i <= 10; i++){

    let resultado = tabla * i

    console.log(`${tabla} x ${i} = ${resultado}`)

} */

/* for (let i = 1; i <= 20 ; i++){

    if(i === 11){
        continue;
    }

    console.log(`El valor de I es: ${i}`)

} */

/* a = 10

b = "10"

=== */

/* let cena = prompt("Que se te antoja")

switch (cena){
    case "hamburguesa":
        console.log(`Pedido: ${cena}, valor $1500`)
        break
    case "pizza":
        console.log(`Pedido: ${cena}, valor $1000`)
        break
    case "lomito":
        console.log(`Pedido: ${cena}, valor $2000`)
        break
    default:
        console.log("Te ahorraste unos pesos de la cena")
        break
} */

/* let pelicula = prompt(`Elija una opción:
1: Gato con botas
2: Batman
3: Spiderman
4: Superman
`);

switch (pelicula) {
  case "1":
    console.log("GAto con botas");
    break;
  case "2":
    console.log("Batman");
    break;
  case "3":
    console.log("Spiderman");
    break;
  case "4":
    console.log("Superman");
    break;
  default:
    console.log("ninguna opcion");
    break;
} */
