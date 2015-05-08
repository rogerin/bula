module.exports = function(app){
    var mongoose = require('mongoose');

    var GrupoSchema = mongoose.Schema;

    var grupo = new GrupoSchema({
        id: Number,
		cat_inicio: String,
		cat_fim: String,
		descricao: String
    });

    return mongoose.model('Grupo', grupo);
};