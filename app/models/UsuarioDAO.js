function UsuarioDAO (connection){
  this._connection = connection()
}

UsuarioDAO.prototype.cadastrarUsuario = function(usuario){
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('usuarios', function(error, collection){
     collection.insert(usuario)
     mongoclient.close();
   });
  })
}

UsuarioDAO.prototype.autenticar = function(usuario){
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('usuarios', function(error, collection){
      collection.find(usuario).toArray(function(error, result){
        console.log(result)
      });
      mongoclient.close();
    });
  }) 
}

module.exports = function(){
  return UsuarioDAO;
}