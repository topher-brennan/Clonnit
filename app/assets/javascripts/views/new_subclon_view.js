Clonnit.Views.NewSubclonView = Backbone.View.extend({
	events: {
		"click button.create": "create"
	},
	
	render: function () {
		var renderedContent = JST["subclons/new"]();
		this.$el.html(renderedContent);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		var formData = $(event.currentTarget.parentElement).serializeJSON();
		var subclon = new Clonnit.Models.Subclon(formData["subclon"]);
		Clonnit.Data.subclons.add(subclon)
		subclon.save();
		Backbone.history.navigate("#/");
	}
});