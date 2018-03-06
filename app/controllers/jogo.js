module.exports = function(){

	let controller = {};

	controller.carregar_jogo = function(application, req, res){
        if(req.session.autorizado){
		res.render('jogo');          
        }
        else{
          res.render('index', { erros :'', dados: '' });
        }
	}

	return controller;
}