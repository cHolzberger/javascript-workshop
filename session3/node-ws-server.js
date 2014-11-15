var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

var commandTriggered = new Promise(); 
var Promise = require("promise");



wss.on('connection', function(ws) {
		new Promise (function (fullfill, reject ) {
			ws.write("Enter Your Nickname: ");
   
			var t= setTimeout( function() {
				reject("Timeout");
			} , 5000);

	 	ws.on('message', function(message) {
      	console.log('received: %s', message);
				t.stop();
	    	fullfill(message); 
			});

		}).then(newClient);
});

function newClient (nickname) {
	msg = "Welcome new Member "+ nickname;
	for ( var client in wss.clients ) {
		wss.clients[client].send(msg);
	}
}
