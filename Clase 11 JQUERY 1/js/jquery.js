const personajes = [
    {id: 1, nombre: "Guerrero", daño: "120"},
    {id: 2, nombre: "Mago", daño: "70"},
    {id: 3, nombre: "Ladron", daño: "90"},
];

for (const personaje of personajes){
    $('#personajes').append(`
    <div <h4>Clase: ${personaje.nombre}</h4> 
        <b>Daño: ${personaje.daño}</b>
        <button id="btn${personaje.id}">Elegir</button>
        </div>
        `);

$(`#btn${personaje.id}`).on('click', function(){
    console.log(`Elegiste al ${personaje.nombre}`);
});

};

$('body').prepend('<h5>¡Hola Aventureros!</h5>');

$('#botom').click(() => {
    $('#personajes').slideDown('slow');
})

$('p').css("background-color", "red");
$('p').css("width", "13%");

$(document).ready(function(){
    $('#fadeO').click(function(){
        $('#boxPrueba').fadeOut(5000);
    })
})

$(document).ready(function(){
    $('#fadeI').click(function(){
        $('#boxPrueba').fadeIn(5000);
    })
})

$(document).ready(function(){
    $('#fadeTo').click(function(){
        $('#boxPrueba').fadeToggle(1000);
    })
})

