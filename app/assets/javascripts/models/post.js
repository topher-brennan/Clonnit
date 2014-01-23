Clonnit.Models.Post = Backbone.Model.extend({
	urlRoot: "api/posts",

	comments: function () {
		if (!this._comments) {
			this._comments = new Clonnit.Collections.Comments([], {
				post: this
			});
		}
		return this._comments;
	},
	
	parse: function (json) {		
		if (json.comments) {//this.get('comments')) {
			this.comments().set(json.comments, { parse: true });
			Clonnit.Data.comments.set(json.comments, { remove: false, parse: true });

			delete json.comments;
		}
		return json;
	},

	linkURLOrFragment: function () {
		var link_url = this.get('link_url');
		if (link_url === "") {
			return "#/posts/" + this.id;
		} else {
			return link_url;
		}
	}
});