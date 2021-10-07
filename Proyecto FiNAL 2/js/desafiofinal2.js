
// Variables que se muestran en el HTML usando EVENTS.
let warrior = document.getElementById("warrior");
warrior.addEventListener("click", showWarrior)

let magician = document.getElementById("magician");
magician.addEventListener("click", showMagician)

let ladron = document.getElementById("ladron");
ladron.addEventListener("click", showLadron);

let mostrarArmas = document.getElementById("mostrarArmas");
mostrarArmas.addEventListener("click", mostrarArms)

let ataque = document.getElementById("atack");
ataque.addEventListener("click", atack)


//Funciones para los botones
function showWarrior(){
    document.getElementById("imgWarrior").classList.toggle("oculto");
    console.log("Haz elegido al Guerrero de la Luz");
    let warriorText = document.createElement("p");

    warriorText.innerHTML = `<p class="lightWarrior"> Haz elegido al Guerrero de la Luz con ${dañoWarrior.daño} puntos de daño</p>`;

    document.body.appendChild(warriorText);


}

function showMagician(){
    document.getElementById("imgMagician").classList.toggle("oculto");
    console.log("Haz elegido al Doctor de la plaga");
    let docText = document.createElement("p");
    docText.innerHTML = `<p class="greenDoc"> Haz elegido al Doctor de la Plaga con ${dañoDoc.daño} puntos de daño</p>`;

    document.body.appendChild(docText);
}


function showLadron(){
    document.getElementById("imgLadron").classList.toggle("oculto");
    console.log("Haz elegido al Ladron de Tesoros");
    let ladronText = document.createElement("p");
    ladronText.innerHTML = `<p class="grayThief"> Haz elegido al Ladron de Tesoros con ${dañoLadron.daño} puntos de daño</p>`;

    document.body.appendChild(ladronText);


}

function mostrarArms(){
    for (const arma of almArmas){
        armas.push(new Armas(arma));
    }
   
}

function atack(){
    for (const tipo of armas) {
        tipo.atacar();
    }
}

/* Para almacenar en STORAGE los datos que se van a utilizar luego.
const armas = [
    {id: 1, tipo: "Espada", daño: "170", resistencia: 200},
    {id: 2, tipo: "Hacha", daño: "210", resistencia: 250},
    {id: 3, tipo: "Daga", daño: "90", resistencia: 100},
];

Almacenado por ID
for (const arma of armas){
    almacLocal(armas.id, JSON.stringify(arma));
} 

Almacena todo el ARRAY
almacLocal("listaArmas", JSON.stringify(armas));
*/


// Constructor de las caracteristicas de los personajes
class charactersStats{
    constructor(daño){
        this.daño = daño;
    }
    
}

// Variables de los daños de los personajes
const damagesCTs = []
const dañoWarrior = new charactersStats('180')
const dañoDoc = new charactersStats('90')
const dañoLadron = new charactersStats('130')

//Pusheando las variables de daño hacia la variable damageCTs
damagesCTs.push(dañoWarrior,dañoLadron,dañoDoc)

const almacLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);

}

// Constructor para lo que queda en STORAGE se PUSHEE dentro de la variable almArmas[[]]
class Armas {
    constructor(arm){
        this.tipo = arm.tipo.toUpperCase(); // Pasa a Mayusculas
        this.daño = parseInt(arm.daño); //Hace el daño del arma un entero
        this.resistencia = parseInt(arm.resistencia); // Hace la resistencia del arma un entero
    }
    //Metodos utilizados que son parte del objeto || atacar para restarle 5 cada vez que se aprete el boton de ataque || potenciar para aumentar el daño en 10 cada vez que se presiona el boton potenciar
    atacar(){ 
        this.resistencia = this.resistencia - 5;
    }

    potenciar(){
        this.daño = this.daño + 10;
    }


}

//Uso de JSON.parse para traer del STORAGE el array de armas
const almArmas = JSON.parse(localStorage.getItem('listaArmas'));
let armas = []

console.log(armas);