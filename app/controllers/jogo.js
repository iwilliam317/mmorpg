module.exports = function(){

	let controller = {};

	controller.carregar_jogo = function(application, req, res){
    if(req.session.autorizado){
      res.render('jogo');          
    }
    else{
      res.send('É necessário fazer o login');
    }
  }

  controller.sair = function(application, req, res){
    req.session.destroy();
    res.render('index', { erros :'', dados: '' });
  }

  return controller;
}