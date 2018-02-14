var mongo = require('mongodb');

var connection = function(){
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