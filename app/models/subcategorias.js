module.exports = function(app){
    var mongoose = require('mongoose');

    var SbuCategoriaSchema = mongoose.Schema;

    var subcategoria = new SbuCategoriaSchema({
		id: String,
		descricao: String
	});

	return mongoose.model('Subcategoria', subcategoria);
};