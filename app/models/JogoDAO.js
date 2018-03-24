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

JogoDAO.prototype.iniciarJogo = function(req, res, usuario, msg){
  
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('jogo', function(error, collection){
      collection.find({ usuario : usuario}).toArray(function(error, result){
        console.log(result[0])
          res.render('jogo', {img_casa : req.session.casa, jogo : result[0], msg : msg});     
      });
      mongoclient.close();

    });
  }) 
}

JogoDAO.prototype.tomarAcao = function(dados){
  this._connection.open(function(error, mongoclient){
    mongoclient.collection('acao', function(error, collection){

      let data = new Date;
      let tempo_acao = null;

      switch(dados.acao){
        case 1: tempo_acao = 1 * 60 * 60000
        case 2: tempo_acao = 2 * 60 * 60000
        case 3: tempo_acao = 5 * 60 * 60000
        case 4: tempo_acao = 5 * 60 * 60000
      }

      dados.acao_termina_em = data.getTime() + tempo_acao;

     collection.insert(dados)
     mongoclient.close();
   });
  })
}


JogoDAO.prototype.recuperarAcoes = function(usuario){
    this._connection.open(function(error, mongoclient){
    mongoclient.collection('acao', function(error, collection){
      collection.find({ usuario : usuario}).toArray(function(error, result){
        console.log(result)
            
      });
      mongoclient.close();

    });
  }) 
}

module.exports = function () {
  return JogoDAO;
}