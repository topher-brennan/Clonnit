Clonnit.Routers.SubclonsRouter = Backbone.Router.extend({
	initialize: function ($rootEl, subclons) {
		this.$rootEl = $rootEl;
		this.subclons = subclons;
	},
	
	routes: {
		"": "index",
		"subclons/:id": "show",
		"posts": "index",
	},
	
	index: function () {
		var that = this;
		
		var subclonsIndexView = new Clonnit.Views.SubclonsIndexView({
			collection: that.subclons
		});
		
		that.subclons.fetch();
		that.$rootEl.html(subclonsIndexView.render().$el);
	},
	
	show: function (id) {
		var that = this;
		
		var subclon = that.subclons.findWhere({ id: parseInt(id) });
		var subclonDetailView = new Clonnit.Views.SubclonDetailView({
			model: subclon
		});
		
		that.$rootEl.html(subclonDetailView.render().$el);
	}
});