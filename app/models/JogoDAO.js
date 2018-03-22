function JogoDAO (connection){
  this._connection = connection()
}

JogoDAO.prototype.gerarAtributos = function(usuario){
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('jogo', function(error, collection){
     collection.insert({
        usuario: usuario,
        suditos: 15, 
        moeda: 200,
        temor: Math.floor(Math.random()*1000),
        sabedoria: Math.floor(Math.random()*1000),
        comercio: Math.floor(Math.random()*1000),
        magia: Math.floor(Math.random()*1000),

     })
     mongoclient.close();
   });
  })
}

JogoDAO.prototype.iniciarJogo = function(req, res, usuario, comando_invalido){
  
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('jogo', function(error, collection){
      collection.find({ usuario : usuario}).toArray(function(error, result){
        console.log(result[0])
          res.render('jogo', {img_casa : req.session.casa, jogo : result[0], comando_invalido : comando_invalido});     
      });
      mongoclient.close();

    });
  }) 
}

JogoDAO.prototype.tomar_acao = function(acao){
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('acao', function(error, collection){
     collection.insert(acao)
     mongoclient.close();
   });
  })
}

module.exports = function () {
  return JogoDAO;
}