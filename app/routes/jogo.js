module.exports = function(application){
	application.get('/jogo', function(req, res){
		application.app.controllers.jogo.carregar_jogo(application, req, res)
		
	});
}