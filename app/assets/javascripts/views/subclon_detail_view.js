Clonnit.Views.SubclonDetailView = Backbone.View.extend({
	initialize: function (options) {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.posts(), "add", this.addPost);
		// this.listenTo(this.model.posts(), "remove", this.removePost);
		
		this.model.posts().each(this.addPost.bind(this));
		
		// var postNewView = new Clonnit.Views.PostsNew({
		// 	subclon: this.model
		// });
		// this.addSubview(".post-new", postNewView);
	},
	
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