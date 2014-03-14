
// Mesh universal code

var device;
var mesh_events = ['ready', 'resume', 'pause', 'online', 'offline'];


mesh_events.forEach(function(name){
	new CustomEvent(name, {
		detail: {
			type: name
		},
		bubbles: true,
		cancelable: false
	});
});


var mesh = function(){}

mesh.prototype = {

	initialize: function(device){
		device = device;
		document.dispatchEvent('ready');
	}

};