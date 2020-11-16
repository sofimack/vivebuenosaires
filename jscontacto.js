

//DOM + eventos


$('.contacto-clase').change(cambiarVerde);

function cambiarVerde(){
	this.style.borderColor = 'green';
}


// constantes

  
const formulario = $('#contact');
const inputs = document.querySelectorAll('#contact input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    mensaje: /^[a-zA-ZÀ-ÿ\s]{8,500}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,15}$/ 
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
        break;
        case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
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


//SCROLL A CONTACTO
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
