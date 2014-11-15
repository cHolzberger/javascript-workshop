define ([], function() {
	var buddys = [
		{ getId: function (){return "1" }, getName: function () { return "Hans" } },
		{ getId: function (){return "2" }, getName: function () { return "Peter" } },
	];

	var counter = 2; 

	var components = {
		input: undefined,
		buddyList: undefined, 
		text: undefined
	};

	var api = { 
		init: function ( input, buddyList, text ) { 
			components.input = input;
		 	components.buddyList = buddyList;
			components.text = text;
		},

		getBuddys: function (  ) { 
	 		return buddys;
		}, 

		writeText: function (nick, text) { 
			components.text.writeText(nick, text); 
		},

		writeStatus: function (msg) {
			components.text.writeText("STATUS", msg); 
		},
		
		onUserLogin: function (nname) {
			var nb = { id: counter++, name: nname, getId: function (  ) {return this.id},getName: function () { return this.name}  };

			buddys.push(nb);
		},

		onUserLogout: function ( buddy ) {
			console.log("FIXME");
		}

							 
	}
	return api;
});
