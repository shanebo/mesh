// Specific App code

var handler = function(e){
	document.getElementById('event').innerHTML = e.type + ' event fired!';
}

document.addEventListener('ready', handler);


// ************************
// simulating native calls


mesh._initialize({
	mesh: '0.0.1',
	model: 'iphone 5',
	platform: 'ios',
	uuid: '97937939',
	version: '7.1.0'
});

// see if I got device details from native

console.log(device);


// simulate more event calls from native

var app_events = ['resume', 'pause', 'online', 'offline'];

app_events.forEach(function(name){
	document.addEventListener(name, handler);
});

app_events.forEach(function(name, i){
	setTimeout(function(){
		mesh._fire(name);
	}, 1000 * (i + 1));
});