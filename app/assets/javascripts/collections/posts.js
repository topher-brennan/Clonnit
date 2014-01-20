Clonnit.Collections.Posts = Backbone.Collection.extend({
	model: Clonnit.Models.Post,
	initialize: function (models, options) {
		this.subclon = options.subclon;
	},
	url: function () {
		return "subclons/" + this.subclon.id + "/posts";
	}
});