

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
        var nuevoItem = document.createTextNode("Gracias por contactarse con nosotros");
        otroItem.appendChild(nuevoItem);
        $("#resultado").append(otroItem);

    }
}

function eliminarNodo() {
    $("#resultado").remove();
}


//SCROLL A CONTACTO
var contacto = $('#contacto');
contacto.click (irAContacto);


function irAContacto () {

   
    $("html, body").animate(
        {
            scrollTop: $("#datosContacto").offset().top
        },
        1500
    )
    
}
