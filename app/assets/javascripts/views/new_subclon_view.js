Clonnit.Views.NewSubclonView = Backbone.View.extend({
	events: {
		"submit #new-subclon-form": "create"
	},
	
	render: function () {
		var renderedContent = JST["subclons/new"]();
		this.$el.html(renderedContent);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		var subclon = new Clonnit.Models.Subclon(formData["subclon"]);
		Clonnit.Data.subclons.unshift(subclon)
		subclon.save();
		Backbone.history.navigate("#/");
	}
});