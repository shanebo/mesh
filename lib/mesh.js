
// Mesh universal code

var device;
var _events = ['ready', 'resume', 'pause', 'online', 'offline'];


var mesh = {

	// js to native calls

	fire: function(route, args, callback){
		
	},

	// native to js calls

	_events: {},

	_initialize: function(info){
		device = info;
		document.dispatchEvent(mesh._events.ready);
	},

	_fire: function(type){
		document.dispatchEvent(mesh._events[type]);
	}

};


_events.forEach(function(name){
	mesh._events[name] = new CustomEvent(name, {
		detail: {
			type: name
		},
		bubbles: true,
		cancelable: false
	});
});


