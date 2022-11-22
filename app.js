var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.set('port', process.env.PORT || 6969);

app.get('/', function(req, res){

  var html = '<form action="/hola" method="POST">'+
    '<input type="hidden" name="oculto" val="campo oculto pero no invisible!">'+
    '<div>'+
	    '<label for="nombre">Inserte su nombre: </label>'+
		    '<input type="text" id="nombre" name="nombre">'+
   '</div>'+
    '<div>'+
	    '<button type="submit">Enviar</button>'+
    '</div>'+
'</form>';
			  
  res.send(html);
});

app.post('/hola', function(req, res){
  var nombre = req.body.nombre;
  var html = 'Hola,: ' + nombre + '.<br>' +
			 '<a href="/">Volver atrás.</a>';
  res.send(html);
});

app.listen(app.get('port'), function(){
  console.log( 'Express se ha iniciado en http://localhost:' +
    app.get('port') + '; presione Ctrl-C para cerrar el servidor.' );
});