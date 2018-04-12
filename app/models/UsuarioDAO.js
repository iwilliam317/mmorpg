// import module crypto for encrypting 
const crypto = require('crypto');

function UsuarioDAO (connection){
  this._connection = connection()
}

UsuarioDAO.prototype.cadastrarUsuario = function(usuario){
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('usuarios', function(error, collection){
      let senha_criptografada = crypto.createHash('md5').update(usuario.senha).digest("hex");
      //overriding with encrypted password
      usuario.senha = senha_criptografada;
      collection.insert(usuario);
      
     mongoclient.close();
   });
  })
}

UsuarioDAO.prototype.autenticar = function(usuario, req, res){

  this._connection.open(function(error, mongoclient){
    mongoclient.collection('usuarios', function(error, collection){

      let senha_criptografada = crypto.createHash('md5').update(usuario.senha).digest("hex");
      usuario.senha = senha_criptografada;

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