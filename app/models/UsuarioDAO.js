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

UsuarioDAO.prototype.autenticar = function(usuario, req, res){
  let resultado = {};
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('usuarios', function(error, collection){
      collection.find(usuario).toArray(function(error, result){
        console.log(result)
        if (result[0] != undefined){
          req.session.autorizado = true;
          req.session.usuario = result[0].usuario;
          req.session.casa = result[0].casa;
        }
        
        if(req.session.autorizado){
          res.redirect("jogo")
        }
        else{
          res.render('index', { erros :'', dados: '' });
        }
      });
      mongoclient.close();

    });
  }) 
 
}

module.exports = function(){
  return UsuarioDAO;
}