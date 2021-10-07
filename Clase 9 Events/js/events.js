

let warrior = document.getElementById("warrior");
warrior.addEventListener("click", showWarrior)

let magician = document.getElementById("magician");
magician.addEventListener("click", showMagician)

let ladron = document.getElementById("ladron");
ladron.addEventListener("click", showLadron)



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

class charactersStats{
    constructor(daño){
        this.daño = daño;
    }
    
}

const damagesCTs = []
const dañoWarrior = new charactersStats('180')
const dañoDoc = new charactersStats('90')
const dañoLadron = new charactersStats('130')

damagesCTs.push(dañoWarrior,dañoLadron,dañoDoc)

const almacLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);

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


class Armas {
    constructor(arm){
        this.tipo = arm.tipo.toUpperCase();
        this.daño = parseInt(arm.daño);
        this.resistencia = parseInt(arm.resistencia);
    }

    atacar(){
        this.resistencia = this.resistencia - 5;
    }

    potenciar(){
        this.daño = this.daño + 10;
    }


}

const almArmas = JSON.parse(localStorage.getItem('listaArmas'));
let armas = []

for (const arma of almArmas){
    armas.push(new Armas(arma));
}

for (const tipo of armas) {
    tipo.atacar();
}


console.log(armas);




            
            




