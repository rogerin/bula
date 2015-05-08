module.exports = function(app) {

	var cid10 = app.controllers.cid10;

	
	app.get('/api/cid10/capitulos', cid10.listCapitulos);
	app.get('/api/cid10/capitulo/:id', cid10.capituloId);

	app.get('/api/cid10/categorias', cid10.listCategorias);
	app.get('/api/cid10/categoria/:id', cid10.categoriaId);

	app.get('/api/cid10/grupos', cid10.listGrupos);
	app.get('/api/cid10/grupo/:id', cid10.grupoId);

	app.get('/api/cid10/subcategorias', cid10.listSubcategorias);
	app.get('/api/cid10/subcategoria/:id', cid10.subcategoriaId);


};