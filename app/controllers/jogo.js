module.exports = function(){

	let controller = {};

	controller.carregar_jogo = function(application, req, res){
		res.render('jogo')
	}

	return controller;
}