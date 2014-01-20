Clonnit.Views.SubclonDetailView = Backbone.View.extend({
	initialize: function (options) {

	},
	
	render: function () {
		var that = this;
		var posts = that.model.posts();
		console.log(posts);
						
		var renderedContent = JST["subclons/detail"]({
			subclon: that.model,
			posts: posts
		});
		
		that.$el.html(renderedContent);
		return that;
	}
});