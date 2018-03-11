module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.carregarIndex(application, req, res)
	});

    application.post("/autenticar", function(req, res){
      application.app.controllers.index.autenticar(application, req, res)
    })
}