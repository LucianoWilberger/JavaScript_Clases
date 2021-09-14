let number = parseInt(prompt("Ingrese un numero para sumarle 1 hasta 20 veces"));

for (let inicio = 1; inicio <= 20; inicio++){
    let result = number + inicio;
    console.log(number + "+" + inicio + "=" + result);
}

 /* While es como un if solo que es un bucle que hasta la condicion no se cumple no termina ---- Do While es casi lo mismo, es indeterminado, solo que primero se ejecuta el codigo y luego la
 opcion de salida */

 let escape = prompt('Ingrese un texto para mostrarlo en pantalla');

 while ((escape != "ESC" ) && (escape != "esc")){
     alert("El usuario ingreso " + escape, escape++)
     escape = prompt('Ingrese ESC para salir');
     
 }

/* Ejercicio de practica con switch*/




