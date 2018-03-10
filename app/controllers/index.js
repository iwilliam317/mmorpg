module.exports.carregar_index = function(application, req, res){
  res.render('index', { erros :'', dados: '' });
}

module.exports.autenticar = function(application, req, res){
  let dados = req.body;

  req.assert("usuario", "Usuário é obrigatório").notEmpty();
  req.assert("senha", "Senha é obrigatória").notEmpty();

  let erros = req.validationErrors();

  if (erros){   
    res.render("index",  {erros: erros, dados: dados}  )
    return
  }
  
  let connection = application.config.dbConnection;

  let UsuarioDAO = new application.app.models.UsuarioDAO(connection);
  let JogoDAO = new application.app.models.JogoDAO(connection);
  
  UsuarioDAO.autenticar(dados, req, res);
  
  JogoDAO.gerarAtributos(dados.usuario);

}
