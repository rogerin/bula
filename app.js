var http 		= require('http');
var app 		= require('./config/express')();
var	mongoose	= require('mongoose');

mongoose.connect('mongodb://bulaapi:bulaapi@ds031982.mongolab.com:31982/bula', function(err){
    if( err ) {
        console.log("Error conectar mongo db: " + err);
    } else {
        console.log("Conexao realizada com sucesso!");
    }
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
	console.log('Conexao realizada!');
});



http.createServer(app).listen(app.get('port'), function(){
    console.log('Servidor rodando na porta ' + app.get('port'));
});
