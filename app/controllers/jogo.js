module.exports = function(){

  let controller = {};

  controller.jogo = function(application, req, res){

    if(req.session.autorizado != true){
      res.send('É necessário fazer o login');
      return;
    }
    
    let comando_invalido = 'n';

    if (req.query.comando_invalido == "s"){
      comando_invalido = req.query.comando_invalido;
    }

    let usuario = req.session.usuario;

    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);
    JogoDAO.iniciarJogo(req, res, usuario, comando_invalido);
         
    
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

  controller.ordenar_acao_sudito = function(application, req, res){

      let dados = req.body;
      req.assert('acao', 'Ação não pode ficar vazia').notEmpty();
      req.assert('quantidade', 'Quantidade não pode ficar vazia').notEmpty();

      let erros = req.validationErrors();
      if (erros){
        res.redirect("/jogo?comando_invalido=s");
       return
      }
        res.send('validacao ok');
  }

  return controller;
}