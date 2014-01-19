Clonnit.Routers.SubclonsRouter = Backbone.Router.extend({
	initialize: function ($rootEl, subclons) {
		this.$rootEl = $rootEl;
		this.subclons = subclons;
	},
	
	routes: {
		"": "index",
		"subclons/:id": "show"
	},
	
	index: function () {
		var that = this;
		
		var subclonsIndexView = new Clonnit.Views.SubclonsIndexView({
			collection: that.subclons
		});
		
		that.$rootEl.html(subclonsIndexView.render().$el);
	},
	
	show: function (id) {
		alert("I'm just getting warmed up!");
	}
});