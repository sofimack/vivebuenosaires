
//SHOW

$(document).ready(cargarTituloPag);


$(document).ready(refresca);

function cargarTituloPag() {
    $("#tituloPag").fadeIn(3000);

}

function refresca () {

   
    $("html, body").animate(
        {
            scrollTop: $("body").offset().top
        },
        500
    )
    
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


//COLOREAR TITULO
var titulo = $('h1');
titulo.hover(pintarNegro, pintarBlanco);


function pintarNegro(evento) {
    $(this).css("color", "black");
}

function pintarBlanco(evento) {
  $(this).css('color', 'white');
}

/*
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
  
*/

