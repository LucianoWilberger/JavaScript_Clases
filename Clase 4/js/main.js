const valor = parseInt(prompt("Ingrese el monto de su producto"));
const cuotas = prompt('¿En cuantas cuotas quiere pagar su producto? (3 6 9 12 18)');

let montoFinal;

function show(message){
    alert(message);
}

function calculadoraDeCuotas(valor, cuotas){
    switch (cuotas){
        case '3':
            montoFinal = valor / 3;
            show( "El valor total en 3 cuotas es de " + montoFinal);
            break;

        case '6':
            montoFinal = valor / 6;
            show( "El valor total en 6 cuotas es de " + montoFinal);
            break;

        case '9':
            montoFinal = valor / 9;
            show( "El valor total en 9 cuotas es de " + montoFinal);
            break;

        case '12':
            montoFinal = valor / 12;
            show( "El valor total en 12 cuotas es de " + montoFinal);
            break;

        case '18':
            montoFinal = valor / 18;
            show( "El valor total en 18 cuotas es de " + montoFinal);
            break;
            
        default:
            show("Elija las cuotas disponibles, vuelva a cagar la pagina");
            break;
            
    }
}

calculadoraDeCuotas(valor, cuotas);




