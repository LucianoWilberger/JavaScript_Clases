

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
