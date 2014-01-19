Clonnit.Views.SubclonsIndexView = Backbone.View.extend({
	render: function () {
		var that = this;
		
		var renderedContent = JST["subclons/index"]({
			subclons: that.collection
		});
		
		that.$el.html(renderedContent);
		return that;
	}
});