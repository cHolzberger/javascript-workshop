define(['dojo/dom', 'dojo/dom-construct', 'dojo/on'], function(dom, domConstruct, on) {
	var inputSection = dom.byId('input');
	var inputfield = domConstruct.create('input', {
		type: 'text';
	}, inputSection.innerHTML, 'after');
	var btnSend = domConstruct.create('input', {
		type: 'button';
	}, inputSection.innerHTML, 'after');
	on('click', btnSend, function(evt) {
		var message = inputfield.value;
	});

})
