module.exports.carregar_index = function(application, req, res){
  res.render('index', { erros :'', dados: '' });
}

module.exports.autenticar = function(application, req, res){
  let dados = req.body;
  //res.send(dados)

  req.assert("usuario", "Usuário é obrigatório").notEmpty();
  req.assert("senha", "Senha é obrigatória").notEmpty();

  let erros = req.validationErrors();

  if (erros){   
    res.render("index",  {erros: erros, dados: dados}  )
    //return
  }
  res.send("tudo certo")
}
