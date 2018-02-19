module.exports.cadastro = function(application, req, res){
	res.render('cadastro', {erros:'', dados: ''})
}
module.exports.cadastrar = function(application, req, res){
	
	let data = req.body;
	
	req.assert('nome', 'Nome não pode estar vazio!').notEmpty();
	req.assert('usuario', 'Usuário não pode estar vazio!').notEmpty();
	req.assert('senha', 'Senha não pode estar vazia!').notEmpty();
	req.assert('casa', 'Escolha uma casa!').notEmpty();

	let erros = req.validationErrors();

	if (erros){
		
		res.render('cadastro', { erros: erros, dados : data})
		return
	}
	
	let UsuarioDAO = new application.app.models.UsuarioDAO;
	UsuarioDAO.cadastrarUsuario(data)
	//res.send('cadastro ok')
}