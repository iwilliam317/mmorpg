module.exports = function(application){
	application.get('/jogo', function(req, res){
    application.app.controllers.jogo.jogo(application, req, res)
  });

  application.get('/sair', function(req, res){
    application.app.controllers.jogo.sair(application, req, res)

  });  

  application.get('/aldeoes', function(req, res){
    application.app.controllers.jogo.aldeoes(application, req, res)

  });  

  application.get('/pergaminhos', function(req, res){
    application.app.controllers.jogo.pergaminhos(application, req, res)

  });
  application.post('/ordenar_acao_sudito', function(req, res){
    application.app.controllers.jogo.ordenarAcaoSudito(application, req, res)

  });

  application.get('/revogar_acao', function(req, res){
    application.app.controllers.jogo.revogarAcao(application, req, res)

  });
}