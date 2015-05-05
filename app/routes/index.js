module.exports = function(app) {
	app.get('/', function(req,res){
		res
			.status(200)
			.json(
				{
					result:"OK",
					status: 200
				}
			);
	} );
}

