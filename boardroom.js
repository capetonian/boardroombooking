Boardroom = Backbone.Model.extend({
	defaults: {
		name: undefined,
		capacity: 8,
		office: 'Cape Town',
		display_screen: true,
		video_conferencing: false,
		air_conditioning: true
	},
	initialize: function(attributes, options) {
		console.log('Initialising ' + attributes.name + ' Boardroom');
	}
});

BoardroomView = Backbone.View.extend({
	initialize: function() {

		console.log("Initialising BoardroomView");

		this.render();
	},
	render: function() {
		var template = _.template($("#boardroom_template").html(), this.datamodel());

		console.log(template);

		$(this.el).html(template);
	},
	datamodel: function() {
		if (this.model !== undefined) {
			return this.model.toJSON();
		} else {
			return {};
		}
	}
});

$(document).ready(function() {


	var AppRouter = Backbone.Router.extend({
		routes: {
			"*actions": "defaultRoute"
		}
	});
	// Initiate the router 
	var app_router = new AppRouter;
	app_router.on('route:defaultRoute', function(actions) {
		

		// Models 

		var esperance = new Boardroom({
			name: "Esperance"
		});
		var dunes = new Boardroom({
			name: "Dunes"
		});
		var miami = new Boardroom({
			name: "Miami"
		});
		var batcave = new Boardroom({
			name: "Bat Cave"
		});

		if(actions !== null){
			var room = eval(actions); /* TODO : Remove eval, rather strap into collection within module */
		}
		else{
			var room = esperance;
		}

		// Views

		var esperance_view = new BoardroomView({
			el: $("#container"),
			model: room
		});

	})
	// Start Backbone history a necessary step for bookmarkable URL's 
	Backbone.history.start();



});