const mongo = require('mongodb');

const connection = function(){

	const server = new mongo.Server('localhost', 27017,'');

	const db = new mongo.Db(
		'got', 
		server,
		{} 
		)
	return db;
}

module.exports = function(){
	return connection
}