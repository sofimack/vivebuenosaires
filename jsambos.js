//ANIMACIONES



//COLOREAR TITULO
var titulo = $('h1');
titulo.hover(pintarNegro, pintarBlanco);


function pintarNegro(evento) {
    $(this).css("color", "black");
}

function pintarBlanco(evento) {
  $(this).css('color', 'white');
}



