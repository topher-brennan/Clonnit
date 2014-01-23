Clonnit.Models.Subclon = Backbone.Model.extend({
	urlRoot: "/api/subclons", 
	
	posts: function () {
		if (!this._posts) {
			this._posts = new Clonnit.Collections.Posts([], {
				subclon: this
			});
		}
		return this._posts;
	},
	
	parse: function (jsonResp) {
		if (jsonResp.posts) {
			this.posts().set(jsonResp.posts, { parse: true });
			Clonnit.Data.posts.set(this.posts().models, { remove: false });
			// Clonnit.Data.posts.add(this.posts());
			delete jsonResp.posts;
		}
		
		return jsonResp;
	}
});