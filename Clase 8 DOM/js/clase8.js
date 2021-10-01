//Objeto 
class SwordsMaker {
    constructor(nameSword, type, resistance, damage, pitcher, zoneSpawn, radar) {
        this.nameSword = nameSword;
        this.type = type;
        this.resistance = resistance;
        this.damage = damage;
        this.pitcher = pitcher;
        this.zoneSpawn = zoneSpawn;
        this.radar = radar;
    }


}
// Variable com promp para mostrar opciones al usuario
const nameSword = prompt('Elija una espada:\n1- Sword of Caos\n2- Sword Gladiator\n3- Zombie Sword');

// Funcion para elegir entre las espadas disponibles
function swordChoise(nameSword) {
    switch (nameSword) {
        case "Sword of Caos":
            alert("Has elegido la: " + caosSword.nameSword + "\nQue es de tipo: " + caosSword.type + "\nTiene una resistencia: " + caosSword.resistance + "\nTiene un ataque base de: " + caosSword.damage + "\nLanza:" + caosSword.pitcher + "\nSe puede encontrar en: " + caosSword.zoneSpawn)
            break;

        case "1":
            alert("Has elegido la: " + caosSword.nameSword + "\nQue es de tipo: " + caosSword.type + "\nTiene una resistencia: " + caosSword.resistance + "\nTiene un ataque base de: " + caosSword.damage + "\nLanza:" + caosSword.pitcher + "\nSe puede encontrar en: " + caosSword.zoneSpawn)
            break;

        case "sword of caos":
            alert("Has elegido la: " + caosSword.nameSword + "\nQue es de tipo: " + caosSword.type + "\nTiene una resistencia: " + caosSword.resistance + "\nTiene un ataque base de: " + caosSword.damage + "\nLanza:" + caosSword.pitcher + "\nSe puede encontrar en: " + caosSword.zoneSpawn)
            break;

        case "Sword Gladiator":
            alert("Has elegido la: " + gladiatorSword.nameSword + "\nQue es de tipo: " + gladiatorSword.type + "\nTiene una resistencia: " + gladiatorSword.resistance + "\nTiene un ataque base de: " + gladiatorSword.damage + "\nLanza:" + gladiatorSword.pitcher + "\nSe puede encontrar en: " + gladiatorSword.zoneSpawn)
            break;

        case "2":
            alert("Has elegido la: " + gladiatorSword.nameSword + "\nQue es de tipo: " + gladiatorSword.type + "\nTiene una resistencia: " + gladiatorSword.resistance + "\nTiene un ataque base de: " + gladiatorSword.damage + "\nLanza:" + gladiatorSword.pitcher + "\nSe puede encontrar en: " + gladiatorSword.zoneSpawn)
            break;

        case "sword gladiator":
            alert("Has elegido la: " + gladiatorSword.nameSword + "\nQue es de tipo: " + gladiatorSword.type + "\nTiene una resistencia: " + gladiatorSword.resistance + "\nTiene un ataque base de: " + gladiatorSword.damage + "\nLanza:" + gladiatorSword.pitcher + "\nSe puede encontrar en: " + gladiatorSword.zoneSpawn)
            break;

        case "Zombie Sword":
            alert("Has elegido la: " + zombieSword.nameSword + "\nQue es de tipo: " + zombieSword.type + "\nTiene una resistencia: " + zombieSword.resistance + "\nTiene un ataque base de: " + zombieSword.damage + "\nLanza:" + zombieSword.pitcher + "\nSe puede encontrar en: " + zombieSword.zoneSpawn)
            break;

        case "3":
            alert("Has elegido la: " + zombieSword.nameSword + "\nQue es de tipo: " + zombieSword.type + "\nTiene una resistencia: " + zombieSword.resistance + "\nTiene un ataque base de: " + zombieSword.damage + "\nLanza:" + zombieSword.pitcher + "\nSe puede encontrar en: " + zombieSword.zoneSpawn)
            break;

        case "zombie sword":
            alert("Has elegido la: " + zombieSword.nameSword + "\nQue es de tipo: " + zombieSword.type + "\nTiene una resistencia: " + zombieSword.resistance + "\nTiene un ataque base de: " + zombieSword.damage + "\nLanza:" + zombieSword.pitcher + "\nSe puede encontrar en: " + zombieSword.zoneSpawn)
            break;

        default:
            alert("No eligio ninguna de las espadas disponibles")
            break;
    }




}
//Variables-Objetos de espadas ordenadas en el array de swords
const swords = [];
const gladiatorSword = new SwordsMaker('Espada del Gladiador', 'Normal', 'Baja', '50', 'No', 'Market, Field, Chivalry, Castle', 'No');
const caosSword = new SwordsMaker('Espada del Caos', 'Muy raro', 'Alta', '300', 'Escupe Veneno y Fuego', 'Kaos', 'Yes');
const zombieSword = new SwordsMaker('Espada Zombie', 'Raro', 'Normal', '100', 'Escupe Veneno Debil', 'Graveyard, Dark forest, Haunted castle', 'No');

//Pusheando las variables creadas al array de swords
swords.push(gladiatorSword, caosSword, zombieSword);

//pusheando
const nombreEspadas = [];
for (const nombres of swords) {
    nombreEspadas.push(nombres.nameSword)

}

// La funcion
swordChoise(nameSword)

//Para que se muestre por consola los nombres de las espadas
console.log("Las espadas son: " + nombreEspadas.toString());

//Usando SORT para ordenar en base al array de mayor a menos el daño de las espadas
const baseDamage = [];
const baseDmg = swords.sort((a,b)=>b.damage - a.damage)
for (const MasDmg of baseDmg){
    baseDamage.push(MasDmg.damage)
}

//El daño de las espadas mostrado por consola
console.log("Las espadas con mas daño son: " + baseDamage.toString());


//Ejemplo de crear elemtno en DOM. Aplicarlo con appendChild y eliminarlo con parentNode.RemoveChild
let gladiatoR = document.createElement("p")

gladiatoR.innerHTML = "Gladiador";

document.body.appendChild(gladiatoR);

gladiatoR.parentNode.removeChild(gladiatoR);

let character = [{id : 1, tipo: 'Gladiador', armor: 50, HP: 100, Mana: 0},
                 {id : 2, tipo: 'Mago', armor: 25, HP: 70, Mana: 100},
                {id: 3, tipo: 'Ladron', armor: 35, HP: 80, Mana: 0}];

for (const chrter of character){
    let contenedor = document.createElement("div");

    contenedor.innerHTML = ` <p class="texts"> ID: ${chrter.id}</p>
                             <h3 class="texts"> Tipo: ${chrter.tipo}</h2>
                             <p class="texts">  Armadura: ${chrter.armor}</p>
                             <p class="texts">  Vida: ${chrter.HP}</p>
                             <p class="texts">  Mana: ${chrter.Mana}</p>`;
    document.body.appendChild(contenedor);                          
}

let desafio8 = prompt("Ingrese un texto que sera aplicado al final la pagina");

function showHTML(desafio8){
    let dess = document.createElement("p");

    dess.innerHTML = `<p class="prompteado"> El texto ingresado es: ${desafio8}</p>`;

    document.body.appendChild(dess);
}

showHTML(desafio8);

