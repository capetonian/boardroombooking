Boardroom = Backbone.Model.extend({
	defaults: {
		name: undefined, 
		capacity: 8, 
		office : 'Cape Town', 
		display_screen: true, 
		video_conferencing: false, 
		air_conditioning: true
	},
	initialize: function(attributes, options){
		console.log('Initialising ' + attributes.name + ' Boardroom');
	}
});

BoardroomView = Backbone.View.extend({
	initialize:function(){
		
		console.log("Initialising BoardroomView");

		this.render();
	}, 
	render:function(){
		var template = _.template($("#boardroom_template").html(), this.datamodel());

		console.log(template);

		$(this.el).html(template);
	}, 
	datamodel:function(){
		if(this.model !== undefined)
		{
			return this.model.toJSON();
		}
		else 
		{
			return {};
		}
	}
});

$(document).ready(function(){

	// Models 

	var esperance = new Boardroom({name: "Esperance"});
	var dunes = new Boardroom({name: "Dunes"});
	var miami = new Boardroom({name: "Miami"});
	var batcave = new Boardroom({name: "Bat Cave"});

	// Views

	var esperance_view = new BoardroomView({el: $("#container"), model: esperance});

});

