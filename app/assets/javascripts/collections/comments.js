Clonnit.Collections.Comments = Backbone.Collection.extend({
	model: Clonnit.Models.Comment,
	initialize: function (models, options) {
		if (options && options.post) {
			this.post = options.post;
		}
	}
});