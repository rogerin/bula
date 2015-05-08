var mysql      = require('mysql'),
	mongoose    	= require('mongoose');

//mongoose.connect('mongodb://localhost/directmed', function(err){
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


	var Schema = mongoose.Schema;
	


	/*
	GRUPO */
	var grupo = new Schema({
		id: Number,
		cat_inicio: String,
		cat_fim: String,
		descricao: String
	});
	var Cat = mongoose.model('Grupo', grupo);

	



	/*
	CAPITULO 
	var capitulo = new Schema({
		id: Number,
		cat_inicio: String,
		cat_fim: String,
		descricao: String
	});
	var Cat = mongoose.model('Capitulo', capitulo);
*/

	
	
	/*
	CATEGORIA 
	var categoria = new Schema({
		id: String,
		descricao: String
	});
	var Cat = mongoose.model('Categoria', categoria);

	Cat.find({},{}, {sort:'id'}, function(err,result){
		console.log(result);
	});
	*/

		/*
	SUB CATEGORIA 
	var subcategoria = new Schema({
		id: String,
		descricao: String
	});
	var Cat = mongoose.model('Subcategoria', subcategoria);
*/

	

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database: 'cid10'
});

connection.connect();



/* subcategoria 
connection.query('SELECT * from cid_sub_categoria', function(err, rows, fields) {
  if (err) throw err;

  	
	for (i = 0; i < rows.length; i++) {
		console.log(i);
	    
	    new Cat(
	    	{
	    		id: rows[i].id,
				descricao: rows[i].descricao

	    	}).save(function (err,capi) {
		  		if (err) {
		  			console.log('Erro')
		  		} else {
		  			//console.log(capi)	
		  		}
		  		
			});
	}
});

connection.end();

});
*/



/* CATEGORIA 
connection.query('SELECT * from cid_categoria', function(err, rows, fields) {
  if (err) throw err;

  	
	for (i = 0; i < rows.length; i++) {
		console.log(i);
	    
	    new Cat(
	    	{
	    		id: rows[i].id,
				descricao: rows[i].descricao

	    	}).save(function (err,capi) {
		  		if (err) {
		  			console.log('Erro')
		  		} else {
		  			//console.log(capi)	
		  		}
		  		
			});
	}
});

connection.end();
});
*/

/* 
CAPITULO 
connection.query('SELECT * from cid_capitulo', function(err, rows, fields) {
  if (err) throw err;

  	
	for (i = 0; i < rows.length; i++) {
		console.log(i);
	    
	    new Cat(
	    	{
	    		id: rows[i].id,
	    		cat_inicio: rows[i].cat_inicio,
				cat_fim: rows[i].cat_fim,
				descricao: rows[i].descricao

	    	}).save(function (err,capi) {
		  		if (err) {
		  			console.log('Erro')
		  		} else {
		  			//console.log(capi)	
		  		}
		  		
			});
	}
});

connection.end();

});
*/
/*
GRUPO */ 
connection.query('SELECT * from cid_grupo', function(err, rows, fields) {
  if (err) throw err;

  	
	for (i = 0; i < rows.length; i++) {
	    console.log(i);
	    new Cat(
	    	{
	    		id: rows[i].id,
	    		cat_inicio: rows[i].cat_inicio,
				cat_fim: rows[i].cat_fim,
				descricao: rows[i].descricao

	    	}).save(function (err,capi) {
		  		if (err) {
		  			console.log('Erro')
		  		} else {
		  			//console.log(capi)	
		  		}
		  		
			});
	}
});

connection.end();

});

