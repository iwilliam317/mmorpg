function UsuarioDAO (){

}

UsuarioDAO.prototype.cadastrarUsuario = function(usuario){
	console.log(usuario)
}

module.exports = function(){
	return UsuarioDAO;
}