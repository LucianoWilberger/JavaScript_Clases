const personajes = [
    {id: 1, nombre: "Guerrero", daño: "120"},
    {id: 2, nombre: "Mago", daño: "70"},
    {id: 3, nombre: "Ladron", daño: "90"},
];

for (const personaje of personajes){
    $('#personajes').append(`
    <div> <h4>Clase: ${personaje.nombre}</h4> 
        <b>Daño: ${personaje.daño}</b>
        <button id="btn${personaje.id}">Elegir</button>
        </div>
        `);

$(`#btn${personaje.id}`).on('click', function(){
    console.log(`Elegiste al ${personaje.nombre}`);
});

};

