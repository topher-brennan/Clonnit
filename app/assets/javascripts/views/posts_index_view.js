Clonnit.Views.PostsIndexView = Backbone.View.extend({
	tagName: 'ul',
	
	render: function () {
		var that = this
		
		var content = JST['posts/index']({
			posts: that.collection
		});
		this.$el.html(content);
		return this;
	},
	
	posts: function () {
		var that = this;
		return Clonnit.posts.filter(function (post) {
			return _.include(that.collection.pluck('post_id'), post.id);
		});
	}
});