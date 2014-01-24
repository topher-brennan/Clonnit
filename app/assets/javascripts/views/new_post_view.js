Clonnit.Views.NewPostView = Backbone.View.extend({
	events: {
		"submit #add-post": "addPost"
	},
		
	render: function () {
		var renderedContent = JST["posts/new"]({
			subclonID: this.attributes.subclonID
		});
		this.$el.html(renderedContent);
		return this;
	},
	
	addPost: function (event) {
		event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		var post = new Clonnit.Models.Post(formData["post"]);
		post.set('subclon_id', this.attributes.subclonID);
		var subclon = Clonnit.Data.subclons.get(this.attributes.subclonID);
		var that = this;
		post.save({}, {
			success: function () {
				post.set('totalVotes', 0);
				post.set('authorUsername', Clonnit.currentUser.username);
				subclon.posts().unshift(post);
				Clonnit.Data.posts.unshift(post);
				Backbone.history.navigate("subclons/" + that.attributes.subclonID, {
					trigger: true
				});
			}
		});	
	}
});