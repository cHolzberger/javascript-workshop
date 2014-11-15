define (["dojo/dom", "dojo/dom-construct", "dojo/domReady!"], function(dom, domConstruct) {
	var container = dom.byId("text"); 

	function cleanText( inp ) {
		return inp.replace(/fuck/g, '****');
	}

	var api = { 
 		writeText: function (user, msg) {
			msg = cleanText(msg);
			
			var msgCnt = domConstruct.create("div", {},container); 
			var userTxt = domConstruct.create("div", {innerHTML: user, style: {width: "100px", float: "left"}}, msgCnt);
			var userMsg = domConstruct.create("span", {innerHTML: msg}, msgCnt);
		}
	}

	return api;
});
