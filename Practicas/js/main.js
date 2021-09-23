let a = 7;
let b = 3;

/*Operadores matematicos basicos*/
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log("Hola" + b);

/*Operadores Incremento/Decremento*/

console.log(a)
console.log(a++)
console.log(a)
console.log(a++)
console.log(a++)
console.log(a--)
console.log(a--)


/*Operadores Asignacion*/

let c = 5;

c +=4;
console.log(c)
c -=4;
console.log(c)
c *=4;
console.log(c)
c /=4;
console.log(c)
c %=4;
console.log(c)

/*Strings*/

let hijuan = "Hola juan carlos como estas chupa bijas";

/* LENGTH -->  devuelve la longitud de la cadena*/ /*(En este ejemplo la variable hijuan tiene 39 caracteres incluidos los de espacio) */

console.log(hijuan.length);

/*toUpperCase() --> Devuelve la cadena en mayusculas ejemplo:*/ /*No olvidarse los parentesis al final de la sentencia o tira error*/

console.log(hijuan.toUpperCase());

/*toLowerCase() --> Devuelve la cadena en minisculas ejemplo:*/

console.log(hijuan.toLowerCase());

/*indexof(String) --> Devuelve la posicion en la que se encuentra el string o conjunto de palabras, si no la encuentra devuelve -1* Ejemplo:* La letra P de la frase se guarda en el caracter34*/

console.log(hijuan.lastIndexOf("p"))

/*replace --> reemplaza el contenido de una variable cambiandole y poniendole lo que le asignemos por ejemplo:*/

console.log(hijuan.replace("bijas","bananas"))

/* Substring, extra los caracteres desde el inicio hasta el final, sin incluir el final, ejemplo:  */

console.log(hijuan.substring(5));

/* Slice --> parecido al substring pero acepta valores negativos, si le pedimos por ejemplo -3 empieza a contar desde el final del valor que le asignamos a la variable, ejemplo: 
Siempre toma los valores positivos antes que los negativos, ver segundo ejemplo*/

console.log(hijuan.slice(-3))
console.log(hijuan.slice(2, -5));

/* Trim --> Elimina los espacios entre las cadenas y los acomoda, no recibe parametros */

let cadena2 = "Hola Juan como             Estas Chupa Bi         JAs"

console.log(hijuan.trim())

/* startsWith(Valor[, se puede especificar parametros en el inicio seleccionando la posicion]) Sirve para declarar valores de True o false respecto a lo que se le pida, ejemplo: */

console.log(hijuan.startsWith("H")); /* En este caso va a tirar TRUE ya que empieza con la letra H mayuscula */
console.log(hijuan.startsWith("h")); /* En este caso va a tirar FALSE ya que empieza con la H mayuscula y se incerto minuscula*/
console.log(hijuan.startsWith("j",5)); /*En este caso se puede especificar el valor que se quiere confirmar como true o false tirando la posicion exacto, al parecer no cuenta espacios como caracter */

/* endsWith --> tira TRUE o FALSE dependiendo en lo que termine el valor de la variable en cuestion */

console.log(hijuan.endsWith("s")); /* Este va a tirar TRUE */
console.log(hijuan.endsWith("H")); /* Este va a tirar FALSE*/


let prueba = prompt('Ingrese un nombre');

while ((prueba != "ESC" ) && (prueba != "esc")){
    switch (prueba){
        case "Luciano" && "LUCIANO":
        alert("Hola Luciano");
        break;

        case "Juan" && "JUAN":
            alert("Hola Juan");
            break;

        default:
            alert("¿Quien re mil por*nga sos?");
            break;
    }      

              

      
}

const numero = prompt("Ingrese la cantidad de veces que desea visualizar 'Hola'");

for (let i = 0; i < numero; i++) {

    alert("Hola");

}

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









