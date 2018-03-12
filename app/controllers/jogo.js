module.exports = function(){

  let controller = {};

  controller.jogo = function(application, req, res){

    if(req.session.autorizado != true){
      res.send('É necessário fazer o login');
      return;
    }
    
    let usuario = req.session.usuario;

    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);
    JogoDAO.iniciarJogo(req, res, usuario);
         
    
  }

  controller.sair = function(application, req, res){
    req.session.destroy();
    res.render('index', { erros :'', dados: '' });
  }

  controller.aldeoes = function(application, req, res){
      res.render('aldeoes', { erros :'', dados: '' });
  }

  controller.pergaminhos = function(application, req, res){
       res.render('pergaminhos', { erros :'', dados: '' });
  }

  return controller;
}