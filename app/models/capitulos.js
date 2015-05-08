module.exports = function(app){
    var mongoose = require('mongoose');

    var CapitoloSchema = mongoose.Schema;

    var capitolo = new CapitoloSchema({
        id: Number,
		cat_inicio: String,
		cat_fim: String,
		descricao: String
    });

    return mongoose.model('Capitulo', capitolo);
};