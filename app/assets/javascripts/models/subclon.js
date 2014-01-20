Clonnit.Models.Subclon = Backbone.Model.extend({
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
			this.posts().set(jsonResp.posts);
			delete jsonResp.posts;
		}
		
		return jsonResp;
	}
});