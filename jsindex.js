//ANIMACION de imagenes

var imagenes = $('.fotoBA');
imagenes.hover(agrandar, achicar);

function agrandar (evento) {
  $(this).css('width', '105%')
}

function achicar (evento) {
  $(this).css('width', '100%')
}



//POP-UP y VALIDACION

$('#enviar').click (chequeo)


errorFormulario = $('#errorIndex');

function chequeo () {

    if ($('#origen').val() === '' || $('#destino').val() === '' || $('#pasajeros').val() === '') {
        errorFormulario.show ();
    }

    else if ($('#origen').val() != $('#destino').val()) {
        $("#errorDestino").hide();
        $('#errorIndex').hide();
        $('#enviar').click (popup);
        $('.popup-close').click (cerrarPopUp);

        var pop = document.querySelector('.popup-wrapper');
        
        function popup () {
        pop.style.display = 'block';
        }
        function cerrarPopUp () {
        pop.style.display = 'none';

        $('#formulario').submit();


        };

    }
    
    
    if ($('#origen').val() == $('#destino').val()) {
        $("#errorDestino").show();
    }

} ; 




// COLOR VERDE CUANDO SELECCIONA


$('.form-control').change(cambiarVerde);

function cambiarVerde() {
    this.style.borderColor = 'green';
}



//VARIABLES Y CONSTANTES

const eze = ('Ezeiza');
const aep = ('Aeroparque');
const htl = ('Hotel');



// COTIZACION 
 

$('#enviar').click (cotizar);
$('span#valor').text() == '.'
function cotizar () {
     if ($('span#valor').text() == '') {
        if ($('input:radio[name=gridRadios]:checked').val() == 'privado') {

            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '12' ) {
                $('span#valor').append('50')
            }
        
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('50')
            }  
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('80')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('80')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('110')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('110')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('35')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('35')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('60')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('60')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('90')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('110')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('50')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('50')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('80')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('80')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('110')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('110')
            } 
    
    
        }
    
        if ($('input:radio[name=gridRadios]:checked').val() == 'regular') {
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('15 por persona')
            } 
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'eze' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'eze' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'htl' && $('#destino option:selected').val() == 'aep' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '12') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '35') {
                $('span#valor').append('15 por persona')
            } 
    
            if ($('#origen option:selected').val() == 'aep' && $('#destino option:selected').val() == 'htl' && $('#pasajeros option:selected').val() == '610') {
                $('span#valor').append('15 por persona')
            } 
    
        }

    }
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
    
     if (privado.checked == true) {
       datos.seleccion = 'Privado'
      
    }

    var regular = $('#gridRadios2');
    if (regular.checked == true){
        datos.seleccion = 'Regular'
       
    }
    localStorage.setItem ('datos ingresados', JSON.stringify(datos))
}



