var mongo = require('mongodb');

var connection = function(){

	var server = new mongo.Server('localhost', 27017,'');

	var db = new mongo.Db(
		'got', 
		server,
		{} 
		)
	return db;
}

module.exports = function(){
	return connection
}