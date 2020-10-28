//ANIMACION - no me toma los milisegundos

$(document).ready(cargarTituloPag);

function cargarTituloPag() {
    $("#tituloPag").show(1000);

}

//VARIABLES Y CONSTANTES

const eze = ('Ezeiza');
const aep = ('Aeroparque');
const htl = ('Hotel');





var serviciosTraslados = [ezehtl1, ezehtl2, ezehtl3, ezehtl4, ezehtl5, ezehtl6, ezehtlreg, htlezereg, aephtl1, aephtl2, aephtl3, aephtl4, aephtl5, aephtl6, aephtlreg, htlaepreg, ezeaep1, ezeaep2, ezeaep3, ezeaep4, ezeaep5, ezeaep6];


var cantidadServicios = serviciosTraslados.length;

var tiposDeAutos = ['Corolla 5 puertas', 'H1', 'Van de hasta 10 pax con valijas'];




// COLOR VERDE CUANDO SELECCIONA


$('.form-control').change(cambiarVerde);



//FUNCIONES COLORES

function cambiarRojo() {
    this.style.borderColor = 'red';
}

function cambiarVerde() {
    this.style.borderColor = 'green';
}

//LOCAL STORAGE + json

var enviarFormulario = $('#enviar');
enviarFormulario.click(guardarEnLocal);

function Datos(desde, hasta, cantPax, seleccion) {
    this.desde = desde;
    this.hasta = hasta;
    this.cantPax = cantPax;
    this.seleccion = seleccion
}

function guardarEnLocal() {

    var desde = document.getElementById('origen').value;
    var hasta = document.getElementById('destino').value;
    var cantPax = document.getElementById('pasajeros').value;
    var datos = new Datos (desde, hasta, cantPax)
    var privado = document.getElementById('gridRadios1');
    console.log(privado)
     if (privado.checked == true) {
       datos.seleccion = 'Privado'
      
    }

    var regular = document.getElementById('gridRadios2');
    if (regular.checked == true){
        datos.seleccion = 'Regular'
       
    }
    localStorage.setItem ('datos ingresados', JSON.stringify(datos))
}

obtenerDatosJson();

function obtenerDatosJson () {
    var obtener = localStorage.getItem ('datos ingresados');
    console.log (JSON.parse(obtener));
    console.log (obtener.seleccion);
}

