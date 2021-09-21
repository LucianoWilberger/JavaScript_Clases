
class SwordsMaker{
    constructor (nameSword, type, resistance, damage, pitcher, zoneSpawn, radar){
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
function show(Message){
    console.log(Message)
}

function swordChoise(nameSword){
    switch(nameSword){
        case "Sword of Caos":
            show(caosSword)
            break;
        
        case "sword of caos":
            show(caosSword)
            break;    
        
        case "Sword Gladiator":
            show(gladiatorSword)
            break;
            
        case "sword gladiator":
            show(gladiatorSword)
            break;
        
        case "Zombie Sword":
            show(zombieSword)
            break;
        case "zombie sword":
            show(zombieSword);
            break;
            
        default:
            show("No eligio ninguna de las espadas disponibles, su alma fue condenada")
            break;    
    }


}

const gladiatorSword = new SwordsMaker('Gladiator Sword','Normal', 'low', '50', 'No', 'Market, Field, Chivalry, Castle', 'No');
const caosSword = new SwordsMaker('Caos Sword','Very Rare','High', '300', 'Spit poison or fire', 'Kaos', 'Yes');
const zombieSword = new SwordsMaker('Zombie Sword','Rare', 'Normal', '100', 'Spit weak posion', 'Graveyard, Dark forest, Haunted castle', 'No');


swordChoise(nameSword)


