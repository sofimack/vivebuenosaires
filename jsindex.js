

//ANIMACION - no me toma los milisegundos

$(document).ready(cargarTituloPag);

function cargarTituloPag() {
    $("#tituloPag").show(1000);

}

//VARIABLES Y CONSTANTES

const eze = ('Ezeiza');
const aep = ('Aeroparque');
const htl = ('Hotel');



/*

//AJAX

$("#enviar").click(mostrar)
    
    function mostrar (){ 
    $.ajax({
         url: "objetos.json",    		
         type: "GET",                    
         dataType: "json"               
    }).done(function (resultado) {  	
               console.log(resultado);
           })
      .fail(function (xhr, status, error) {   
             console.log(xhr); console.log(status); console.log(error);
            }) 
  };
  

var serviciosTraslados = [ezehtl1, ezehtl2, ezehtl3, ezehtl4, ezehtl5, ezehtl6, ezehtlreg, htlezereg, aephtl1, aephtl2, aephtl3, aephtl4, aephtl5, aephtl6, aephtlreg, htlaepreg, ezeaep1, ezeaep2, ezeaep3, ezeaep4, ezeaep5, ezeaep6];


var cantidadServicios = serviciosTraslados.length; */

var tiposDeAutos = ['Corolla 5 puertas', 'H1', 'Van de hasta 10 pax con valijas'];


//alert



$('#enviar').click (chequeo)



function chequeo () {
    if ($('#origen').val() == $('#destino').val()) {
       alert ('El origen y el destino deben ser diferentes')
};

    
    
    if ($('#origen').val() != $('#destino').val()) {
        $('#enviar').click (popup);
        $('.popup-close').click (cerrarPopUp);

        var pop = document.querySelector('.popup-wrapper');
        
        function popup () {
        pop.style.display = 'block';
        }
        function cerrarPopUp () {
        pop.style.display = 'none';

        
        
        };

    }

} 



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

    var desde = $('#origen').val();
    var hasta = $('#destino').val();
    var cantPax = $('#pasajeros').val();
    var datos = new Datos (desde, hasta, cantPax)
    var privado = $('#gridRadios1');
    //console.log(privado)
     if (privado.checked == true) {
       datos.seleccion = 'Privado'
      
    }

    var regular = $('#gridRadios2');
    if (regular.checked == true){
        datos.seleccion = 'Regular'
       
    }
    localStorage.setItem ('datos ingresados', JSON.stringify(datos))
}



