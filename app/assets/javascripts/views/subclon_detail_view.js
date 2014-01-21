Clonnit.Views.SubclonDetailView = Backbone.View.extend({
	addPost: function (post) {
		var postsDetailView = Clonnit.Views.PostDetailView({
			model: post
		});
		
		this.addSubview(".posts", postsDetailView);
		postsDetailView.render();
	},
	
	render: function () {
		console.log(this.model);
		console.log(this.model.posts());
		var renderedContent = JST["subclons/detail"]({
			subclon: this.model,
			posts: this.model.posts()
		});
		
		this.$el.html(renderedContent);
		return this;
	}
});