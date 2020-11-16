
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
//COLOREAR TITULO
var titulo = $('h1');
titulo.hover(pintarNegro, pintarBlanco);


function pintarNegro(evento) {
    $(this).css("color", "black");
}

function pintarBlanco(evento) {
  $(this).css('color', 'white');
}



