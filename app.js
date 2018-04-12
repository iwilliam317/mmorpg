/* importars as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
app.listen(app.get('port'), function(){
	console.log('Servidor online');
})