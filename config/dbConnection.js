var mongo = require('mongodb');

var connection = function(){
	//mongo.DB recebe três parâmetros, 1. nome da database, 2. instância do servidor e 3. configurações adicionais
	var db = new mongo.Db(
		'got', 
		new mongo.Server(
			'localhost', //endereço
			27017, //porta
			{} //configuração do servidor
			),
		{} //configuração do servidor
		)
	return db;
}

module.exports = function(){
	return connection
}