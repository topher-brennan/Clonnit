Clonnit.Collections.Posts = Backbone.Collection.extend({
	model: Clonnit.Models.Post,
	initialize: function (models, options) {
		if (options && options.subclon) {
			this.subclon = options.subclon;
		}
	},
	
	comparator: function (post) {
		return -post.get('totalVotes');
	}
});