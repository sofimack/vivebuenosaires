
//AJAX

mostrar ();
    
   function mostrar (){ 
    $.ajax({
         url: "./objetos.json",    		
         type: "GET",                    
         dataType: "json"               
    }).done(function (resultado) {  	
               console.log(resultado);
               console.log('trasladosEZEHTL'[0].precio)
           })
      .fail(function (xhr, status, error) {   
             console.log(xhr); console.log(status); console.log(error);
            }) 
  };

  


//COLOREAR TITULO
var titulo = $('h1');
titulo.hover(pintarNegro, pintarBlanco);


function pintarNegro(evento) {
    $(this).css("color", "black");
}

function pintarBlanco(evento) {
  $(this).css('color', 'white');
}



