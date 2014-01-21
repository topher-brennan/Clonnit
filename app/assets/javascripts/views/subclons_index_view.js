Clonnit.Views.SubclonsIndexView = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, 'add remove reset sync change', this.render);
	},
	
	render: function () {
		var that = this;
		
		var renderedContent = JST["subclons/index"]({
			subclons: that.collection
		});
		
		that.$el.html(renderedContent);
		return that;
	}
});