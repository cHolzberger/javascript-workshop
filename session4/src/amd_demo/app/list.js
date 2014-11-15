define (["dojo/on", "dojo/topic", "dojo/dom", "dojo/dom-construct","dojo/text!./template/Item.html", "dojo/domReady!"], function(on, topic, dom, domConstruct, tmpl) {
 							var node = dom.byId("five");
							var list = dom.byId("list");

							
							one.innerHTML ="blub";
							domConstruct.place( tmpl, node, "after");

							//domConstruct.destroy(node);
							on(node, "click", function () { 
								topic.publish("buttonClicked", "really!");
							});

							topic.subscribe("buttonClicked", function (text) {

								alert(text);
							});

});
