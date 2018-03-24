module.exports = function(){

  let controller = {};

  controller.jogo = function(application, req, res){

    if(req.session.autorizado != true){
      res.send('É necessário fazer o login');
      return;
    }
    
    let msg = '';

    if (req.query.msg != ""){
      msg = req.query.msg;
    }

    let usuario = req.session.usuario;

    let connection = application.config.dbConnection;
    let JogoDAO = new application.app.models.JogoDAO(connection);
    JogoDAO.iniciarJogo(req, res, usuario, msg);
         
    
  }

  controller.sair = function(application, req, res){
    req.session.destroy();
    res.render('index', { erros :'', dados: '' });
  }

  controller.aldeoes = function(application, req, res){
      res.render('aldeoes', { erros :'', dados: '' });
  }

  controller.pergaminhos = function(application, req, res){

      let connection = application.config.dbConnection;
      let JogoDAO = new application.app.models.JogoDAO(connection);

      let usuario = req.session.usuario;

      JogoDAO.recuperarAcoes(usuario);
       res.render('pergaminhos', { erros :'', dados: '' });
  }

  controller.ordenarAcaoSudito = function(application, req, res){

      let dados = req.body;
      dados.usuario = req.session.usuario;

      req.assert('acao', 'Ação não pode ficar vazia').notEmpty();
      req.assert('quantidade', 'Quantidade não pode ficar vazia').notEmpty();

      let erros = req.validationErrors();
      
      if (erros){
        res.redirect("/jogo?msg=e");
       return
      }

      let connection = application.config.dbConnection;
      let JogoDAO = new application.app.models.JogoDAO(connection);

      JogoDAO.tomarAcao(dados);

      res.redirect("/jogo?msg=o");
  }

  return controller;
}