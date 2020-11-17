

//DOM + eventos


$('.contacto-clase').change(cambiarVerde);

function cambiarVerde(){
	this.style.borderColor = 'green';
}


//capturar Enter

$('#contactoMensaje').keypress(teclas);

function teclas(evento) {
    switch (evento.which) {
        case 13:              
            enter();
            break;
        case 32:           
            eliminarNodo();
            break;
    }
}

function enter() {
    if ( $("#yaEsta").length == 0 ) {
        var otroItem = document.createElement("h3");
        otroItem.id = "yaEsta"
        var nuevoItem = document.createTextNode("No se olvide de enviar el formulario");
        otroItem.appendChild(nuevoItem);
        $("#resultado").append(otroItem);

    }
}

function eliminarNodo() {
    $("#resultado").remove();
}


$('#dirigirContacto').click (irAContacto);
$('#contacto').click (irAContacto);


function irAContacto () {

   
    $("html, body").animate(
        {
            scrollTop: $("#datosContacto").offset().top
        },
        1500
    )
    
}
