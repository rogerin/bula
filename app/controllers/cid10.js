module.exports = function(app){
	var Capitulo		= app.models.capitulos; 
	var Categorias		= app.models.categorias; 
	var Grupos			= app.models.grupos; 
	var Subcategorias	= app.models.subcategorias; 

	

	var Cid10Controller = {
		listCapitulos: function(req,res){
			Capitulo.find({},{},{},function(err, capitulos){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(capitulos);
				}
			});
		},
		capituloId: function(req,res){
			Capitulo.find({id: req.params.id },{},{},function(err, capitulos){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(capitulos);
				}
			});
		},

		listCategorias: function(req,res){
			Categorias.find({},{},{},function(err, categorias){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(categorias);
				}
			});
		},
		categoriaId: function(req,res){
			Categorias.find({id: req.params.id},{},{},function(err, categorias){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(categorias);
				}
			});
		},

		listGrupos: function(req,res) {
			Grupos.find({},{},{},function(err, grupos){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(grupos);
				}
			});
		},
		grupoId: function(req,res) {
			Grupos.find({id: req.params.id},{},{},function(err, grupos){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(grupos);
				}
			});
		},

		listSubcategorias: function(req,res) {
			Subcategorias.find({},{},{},function(err, subcategorias){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(subcategorias);
				}
			});
		},
		subcategoriaId: function(req,res) {
			Subcategorias.find({id: req.params.id},{},{},function(err, subcategorias){
				if(err) {
					res.json(err);
				} else {
					res
						.status(200)
						.json(subcategorias);
				}
			});
		}

	};

	return Cid10Controller;
}