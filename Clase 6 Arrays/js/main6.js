// Este codigo muestra algunos datos de algunos futbolistas de la seleccion Argentina, y devolvera datos segun su altura o posicion

class caractFutbolista {
    constructor(nombre, altura, posicion){
        this.nombre = nombre;
        this.altura = altura;
        this.posicion = posicion;
    }
}

const futbolistas = []
let messi = new caractFutbolista ("Lionel Messi", 165, "delantero");
let kun = new caractFutbolista ("Sergio Agüero", 172, "delantero");
let dimaria = new caractFutbolista ("Angel Di Maria", 180, "medio");
let martinez = new caractFutbolista ("Emiliano Martinez", 193, "arquero");

futbolistas.push(messi, kun, dimaria, martinez);

// // Muestras en consola
// Mostrar solo nombres de futbolistas
let listaJugadores = []
for (const nomFut of futbolistas) {
    listaJugadores.push(nomFut.nombre)
}
console.log("Algunos Futbolistas de la seleccion Argentina son " + listaJugadores.toString());

// Filtrar y mostrar futbolistas con Posicion delantero
const delanteros = futbolistas.filter(jugador => jugador.posicion == "delantero");
const nombresJugadoresDel = [];
for(const jugador of delanteros){
    nombresJugadoresDel.push(jugador.nombre)
}
console.log("De estos futbolistas los que juegan como delanteros son " + nombresJugadoresDel.toString());

//Ordenar altura de jugadores de mayor a menor
const ordAlturas = [];
const ordAlt = futbolistas.sort((a,b)=>b.altura - a.altura)
for (const mayorAMenor of ordAlt) {
    ordAlturas.push(mayorAMenor.nombre)
}
console.log("Los jugadores ordenados de mayor a menor altura son " + ordAlturas.toString());


