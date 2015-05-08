module.exports = function(app){
    var mongoose = require('mongoose');

    var CategoriaSchema = mongoose.Schema;

    var categoria = new CategoriaSchema({
		id: String,
		descricao: String
	});

	return mongoose.model('Categoria', categoria);
};