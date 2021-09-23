
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

const nameSword = prompt('Elija una espada:\nSword of Caos\nSword Gladiator\nZombie Sword');

function show(Message) {
    console.log(Message)
}

function swordChoise(nameSword) {
    switch (nameSword) {
        case "Sword of Caos":
            alert("Has elegido la: " + caosSword.nameSword + "\nQue es de tipo: " + caosSword.type + "\nTiene una resistencia: " + caosSword.resistance + "\nTiene un ataque base de: " + caosSword.damage + "\nLanza:" + caosSword.pitcher + "\nSe puede encontrar en: " + caosSword.zoneSpawn)
            break;

        case "sword of caos":
            alert("Has elegido la: " + caosSword.nameSword + "\nQue es de tipo: " + caosSword.type + "\nTiene una resistencia: " + caosSword.resistance + "\nTiene un ataque base de: " + caosSword.damage + "\nLanza:" + caosSword.pitcher + "\nSe puede encontrar en: " + caosSword.zoneSpawn)
            bcaos
        case "Sword Gladiator":
            alert("Has elegido la: " + gladiatorSword.nameSword + "\nQue es de tipo: " + gladiatorSword.type + "\nTiene una resistencia: " + gladiatorSword.resistance + "\nTiene un ataque base de: " + gladiatorSword.damage + "\nLanza:" + gladiatorSword.pitcher + "\nSe puede encontrar en: " + gladiatorSword.zoneSpawn)
            break;

        case "sword gladiator":
            alert("Has elegido la: " + gladiatorSword.nameSword + "\nQue es de tipo: " + gladiatorSword.type + "\nTiene una resistencia: " + gladiatorSword.resistance + "\nTiene un ataque base de: " + gladiatorSword.damage + "\nLanza:" + gladiatorSword.pitcher + "\nSe puede encontrar en: " + gladiatorSword.zoneSpawn)
            break;

        case "Zombie Sword":
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



const gladiatorSword = new SwordsMaker('Espada del Gladiador', 'Normal', 'Baja', '50', 'No', 'Market, Field, Chivalry, Castle', 'No');

const caosSword = new SwordsMaker('Espada del Caos', 'Muy raro', 'Alta', '300', 'Escupe Veneno y Fuego', 'Kaos', 'Yes');

const zombieSword = new SwordsMaker('Espada Zombie', 'Raro', 'Normal', '100', 'Escupe Veneno Debil', 'Graveyard, Dark forest, Haunted castle', 'No');

const swords = [];

swords.push(gladiatorSword, caosSword, zombieSword);

const nombreEspadas = [];
for (const nombres of swords) {
    nombreEspadas.push(nombres.nameSword)

}





swordChoise(nameSword)

console.log("Las espadas son: " + nombreEspadas.toString());



