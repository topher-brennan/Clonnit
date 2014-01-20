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
		var subclonsIndexView = new Clonnit.Views.SubclonsIndexView({
			collection: this.subclons
		});
		
		this.subclons.fetch();
		this._swapView(subclonsIndexView);
	},
	
	show: function (id) {
		var subclon = this.subclons.findWhere({ id: parseInt(id) });
		
		var subclonDetailView = new Clonnit.Views.SubclonDetailView({
			model: subclon
		});
		
		this._swapView(subclonDetailView);
	},
	
	_swapView: function (view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		
		this.$rootEl.html(view.render().$el);
	}
});