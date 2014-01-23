Clonnit.Views.NewPostView = Backbone.View.extend({
	events: {
		"click button.add-post": "addPost"
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
		var formData = $(event.currentTarget.parentElement).serializeJSON();
		var post = new Clonnit.Models.Post(formData["post"]);
		post.set('subclon_id', this.attributes.subclonID);
		Clonnit.Data.posts.add(post);
		post.save();
		Backbone.history.navigate("subclons/" + this.attributes.subclonID, {
			trigger: true
		});
	}
});